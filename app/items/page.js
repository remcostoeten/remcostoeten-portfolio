'use client';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addItem, getItems, updateItem, deleteItem } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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
    const [categories, setCategories] = useState(['All Items', 'Category 1', 'Category 2', 'Category 3']);
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
        let userItems = await getItems(user.uid);
        userItems = userItems.map((item) => ({ ...item, price: Number(item.price) }));
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
            date: new Date(),
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

    const handleSortByPrice = () => {
        let sortedItems = [...items];
        sortedItems.sort((a, b) => a.price - b.price);
        setItems(sortedItems);
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
            loadItems(); // Fetch all items
        } else {
            const filteredItems = items.filter((item) => item.category === category);
            setItems(filteredItems); // Update items state with filtered items
        }
        setSelectedCategory(category);
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

    const handleAddCategory = (newCategory) => {
        const updatedCategories = [...categories, newCategory];
        setCategories(updatedCategories);
    };

    const handleRemoveCategory = (categoryToRemove) => {
        const updatedCategories = categories.filter((category) => category !== categoryToRemove);
        setCategories(updatedCategories);
        if (selectedCategory === categoryToRemove) {
            setSelectedCategory('');
        }
    };

    const handleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUser(user);
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error occurred during logout:', error);
        }
    };

    return (
        <div className="min-h-screen w-screen bg-offwhite py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r bg-themered bg-red-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-offwhite shadow-lg sm:rounded-3xl sm:p-20">
                    {user ? (
                        <div>
                            <h1 className="text-2xl font-semibold mb-4">Welcome, {user.displayName}</h1>
                            <button onClick={handleLogout} className="bg-red-500 text-offwhite px-4 py-2 rounded-lg mb-4">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h1 className="text-2xl font-semibold mb-4">Welcome!</h1>
                            <button onClick={handleLogin} className="bg-themeblue text-offwhite px-4 py-2 rounded-lg mb-4">
                                Login
                            </button>
                        </div>
                    )}

                    <h2 className="text-2xl font-semibold mb-4">Add Item</h2>

                    <div className="mb-4 flex items-center">
                        <button onClick={handleSortByPrice} className="bg-blue-500 text-offwhite px-4 py-2 rounded-lg mb-4">
                            Sort by Price
                        </button>
                    </div>

                    <div className="flex mb-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                className={`px-4 py-2 rounded-lg ${category === selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                                onClick={() => handleToggleCategory(category)}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: selectedCategory ? (category === selectedCategory ? 1 : 0.5) : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>

                    <div>
                        <input className="border" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                        <input className="border" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <input className="border" type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
                        <input className="border" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                        <button onClick={handleAddItem} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                            Add Item
                        </button>
                    </div>

                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="border p-4 mb-4"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <button onClick={() => handleDeleteItem(item.id)} className="bg-red-500 text-offblack px-4 py-2 rounded-lg">
                                    Delete
                                </button>
                            </div>
                            <p className="text-gray-600">${item.price}</p>
                            <p className="text-gray-600">{item.category}</p>

                            <div className="flex justify-between items-center">
                                <button onClick={() => handleUpdateItem(item.id)} className="bg-green-500 text-offblack px-4 py-2 rounded-lg">
                                    Update
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Items;
