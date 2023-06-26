'use client';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { addItem, getItems, updateItem, deleteItem } from '@/lib/firebase';

import LoginSection from '@/components/uitzet/LoginSection';
import ItemForm from '@/components/uitzet/ItemForm';
import ItemTable from '@/components/uitzet/ItemTable';

const Page = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Items');
    const [selectedItem, setSelectedItem] = useState(null);
    const [categories, setCategories] = useState(['All Items', 'Woonkamer', 'Badkamer', 'Slaapkamer']);
    const [showModal, setShowModal] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedItemDescription, setSelectedItemDescription] = useState('');
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const loadItems = async () => {
        setIsLoading(true);
        let userItems = await getItems(user.uid);
        userItems = userItems.map((item) => ({
            ...item,
            price: Number(item.price),
            date: new Date(item.date),
        }));
        setItems(userItems);
        setIsLoading(false);
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
            date: new Date().toISOString(), // Store the date as a valid string representation
        };

        setTitle('');
        setPrice('');
        setCategory('');
        setUrl('');
        setDescription('');
        setDate('');
        setItems([...items, newItem]);
        await addItem(user.uid, newItem);
        console.log('New item:', newItem);
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

    const handleSortByPrice = () => {
        let sortedItems = [...items];
        sortedItems.sort((a, b) => a.price - b.price);
        setItems(sortedItems);
    };

    const handleUpdateItem = async (itemId, updatedItem) => {
        await updateItem(user.uid, itemId, updatedItem);
        const updatedItems = items.map((item) => (item.id === itemId ? updatedItem : item));
        setItems(updatedItems);
        console.log(updatedItem);
    };

    const handleDeleteItem = async (itemId) => {
        await deleteItem(user.uid, itemId);
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
        console.log('Deleted item:', itemId);
    };

    const handleToggleCategory = (category) => {
        if (category === 'All Items') {
            setItems(userItems);
        } else {
            const filteredItems = userItems.filter((item) => item.category === category);
            setItems(filteredItems);
        }
        setSelectedCategory(category);
        setSelectedItem(null);
    };

    const handleReadMore = (description) => {
        setSelectedItemDescription(description);
        setShowModal(true);
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
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

    return (
        <>
            <div className="container mx-auto px-4 sm:px-8">
                {user ? (
                    <div>
                        <h1 className="text-2xl font-semibold mb-4">Welcome, {user.displayName}</h1>
                        <button onClick={handleLogout} className="bg-red-500 text-offwhite px-4 py-2 rounded-lg mb-4">
                            Logout
                        </button>
                    </div>
                ) : (
                    <LoginSection handleLogin={handleLogin} />
                )}
                <ItemForm
                    title={title}
                    price={price}
                    category={category}
                    url={url}
                    description={description}
                    handleAddItem={handleAddItem}
                    setTitle={setTitle}
                    setPrice={setPrice}
                    setCategory={setCategory}
                    setUrl={setUrl}
                    setDescription={setDescription}
                    categories={categories}
                />
                <ItemTable items={items} isLoading={isLoading} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} handleReadMore={handleReadMore} />
            </div>
        </>
    );
};

export default Page;
