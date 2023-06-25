'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addItem, getItems, updateItem, deleteItem } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const Items = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Items');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedItem, setSelectedItem] = useState(null);
    const router = useRouter();

    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const loadItems = async () => {
        const userItems = await getItems(user.uid);
        setItems(userItems);
    };

    const handleAddItem = async (e) => {
        e.preventDefault();
        if (!user) {
            console.error('User is not signed in');
            return;
        }
        const newItem = {
            title,
            price: parseFloat(price) || 0,
            category,
            url,
            description,
        };
        const addedItem = await addItem(user.uid, newItem);
        setItems([...items, { ...newItem, id: addedItem.id }]);
        console.log('Added item:', addedItem);

        setTitle('');
        setPrice('');
        setCategory('');
        setUrl('');
        setDescription('');
    };

    const handleUpdateItem = async (itemId, updatedItem) => {
        await updateItem(user.uid, itemId, updatedItem);
        const updatedItems = items.map((item) => (item.id === itemId ? updatedItem : item));
        setItems(updatedItems);
        console.log(updateItem);
    };

    const handleDeleteItem = async (itemId) => {
        await deleteItem(user.uid, itemId);
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
        console.log('Deleted item:', itemId);
    };

    const handleToggleCategory = (category) => {
        if (category === 'All Items') {
            setSelectedCategory('');
        } else {
            setSelectedCategory(category);
        }
        setSelectedItem(null);
    };

    const handleSortItems = () => {
        const sortedItems = [...items];
        if (sortOrder === 'asc') {
            sortedItems.sort((a, b) => a.title.localeCompare(b.title));
            setSortOrder('desc');
        } else {
            sortedItems.sort((a, b) => b.title.localeCompare(a.title));
            setSortOrder('asc');
        }
        setItems(sortedItems);
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    const categories = ['All Items', 'Category 1', 'Category 2', 'Category 3'];

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 fto-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-2xl font-semibold mb-4">Add Item</h1>
                    <form onSubmit={handleAddItem} className="mb-4">
                        <div className="flex items-center mb-2">
                            <label className="mr-2">Title:</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="p-2 border rounded-lg" />
                        </div>
                        <div className="flex items-center mb-2">
                            <label className="mr-2">Price:</label>
                            <input type="number" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} className="p-2 border rounded-lg" />
                        </div>
                        <div className="flex items-center mb-2">
                            <label className="mr-2">Category:</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} required className="p-2 border rounded-lg">
                                <option value="">Select a category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-center mb-2">
                            <label className="mr-2">URL:</label>
                            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="p-2 border rounded-lg" />
                        </div>
                        <div className="flex items-center mb-2">
                            <label className="mr-2">Description:</label>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="p-2 border rounded-lg" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            Add Item
                        </button>
                    </form>
                    {items.map((item) => (
                        <div key={item.id} className="border p-4 mb-4">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-500">Price: ${item.price}</p>
                            <p className="text-gray-500">Category: {item.category}</p>
                            <p className="text-gray-500">URL: {item.url}</p>
                            <p className="text-gray-500">Description: {item.description}</p>
                            <div className="flex">
                                <button onClick={() => handleSelectItem(item)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}{' '}
                </div>
            </div>
        </div>
    );
};

export default Items;
