'use client';
import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '@/lib/authContext';
import { addItem, getItems, updateItem, deleteItem } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const Items = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/');
        } else {
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
        await addItem(user.uid, newItem);
        setItems([...items, newItem]);
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
    };

    const handleDeleteItem = async (itemId) => {
        await deleteItem(user.uid, itemId);
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
    };

    const handleToggleCategory = (category) => {
        setSelectedCategory(category);
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

    const categories = ['Category 1', 'Category 2', 'Category 3'];

    return (
        <div className="container mx-auto px-4 bg-offwhite">
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
            <h2 className="text-2xl font-semibold mb-4">Items</h2>
            <div className="mb-4 flex items-center">
                <button className={`px-4 py-2 rounded-lg ${sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`} onClick={handleSortItems}>
                    Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
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
            <ul>
                <AnimatePresence>
                    {selectedCategory === '' && (
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-100 rounded-lg mb-4 p-4"
                        >
                            {/* Item details */}
                        </motion.li>
                    )}
                    {items.map((item) =>
                        selectedCategory === '' || item.category === selectedCategory ? (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gray-100 rounded-lg mb-4 p-4"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-gray-500">Price: ${item.price}</p>
                                        <p className="text-gray-500">Category: {item.category}</p>
                                        <p className="text-gray-500">URL: {item.url}</p>
                                        <p className="text-gray-500">Description: {item.description}</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() =>
                                                handleUpdateItem(item.id, {
                                                    ...item,
                                                    price: item.price + 10, // Example of updating item price
                                                })
                                            }
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                                        >
                                            Update Price
                                        </button>
                                        <button onClick={() => handleDeleteItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </motion.li>
                        ) : null,
                    )}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default Items;
