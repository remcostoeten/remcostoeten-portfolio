'use client';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import IconLogout from '@/components/icons/Logout';
import LoginSection from '@/components/uitzet/LoginSection';
import ItemForm from '@/components/uitzet/ItemForm';
import ItemTable from '@/components/uitzet/ItemTable';
import { addItem, getItems, updateItem, deleteItem, storage } from '@/lib/firebase';
const useClient = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [url, setUrl] = useState('');
    const [note, setNote] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Items');
    const [selectedItem, setSelectedItem] = useState(null);
    const [categories, setCategories] = useState(['All Items', 'Woonkamer', 'Badkamer', 'Slaapkamer', 'Hal', 'Keuken', 'Misc', 'Verbouwen(?)']);
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

    const handleAddNote = async (e) => {
        e.preventDefault();
        if (!user) {
            console.error('User is not signed in');
            return;
        }

        const newNote = {
            note,
        };

        await addItem(user.uid, newNote);
        console.log('New item:', newNote);
    };
    const handleAddItem = async (e, image) => {
        e.preventDefault();
        if (!user) {
            console.error('User is not signed in');
            return;
        }

        let imageUrl = '';
        let imageRef = '';

        if (image) {
            const storageRef = ref(storage, `users/${user.uid}/${image.name}`);
            await uploadBytes(storageRef, image);
            imageUrl = await getDownloadURL(storageRef);
            imageRef = storageRef.fullPath;
        }

        const newItem = {
            title,
            price: parseFloat(price) || 0,
            category,
            url,
            description,
            date: new Date().toISOString(),
            imageRef,
            imageUrl,
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
        if (user) {
            loadItems();
        }
        return () => unsubscribe();
    }, [user]);

    return {
        user,
        items,
        title,
        price,
        date,
        category,
        url,
        description,
        selectedCategory,
        selectedItem,
        categories,
        showModal,
        sortOrder,
        selectedItemDescription,
        showFullDescription,
        isLoading,
        setTitle,
        setPrice,
        setDate,
        setCategory,
        setUrl,
        setDescription,
        setSelectedCategory,
        setSelectedItem,
        setCategories,
        setShowModal,
        handleAddNote,
        setSortOrder,
        setSelectedItemDescription,
        setShowFullDescription,
        setIsLoading,
        handleAddItem,
        handleSortItems,
        handleSortByPrice,
        handleUpdateItem,
        handleDeleteItem,
        handleToggleCategory,
        handleReadMore,
        toggleDescription,
        handleLogin,
        handleLogout,
    };
};

const Page = () => {
    const {
        user,
        items,
        title,
        price,
        category,
        url,
        description,
        categories,
        isLoading,
        setTitle,
        setPrice,
        setCategory,
        setUrl,
        setDescription,
        handleAddNote,
        handleAddItem,
        handleUpdateItem,
        handleDeleteItem,
        handleReadMore,
        handleLogin,
        handleLogout,
    } = useClient();

    const allowedEmail = process.env.NEXT_PUBLIC_ALLOWED_EMAIL;

    if (user && user.email === allowedEmail) {
        return (
            <>
                <div className="container bg-white p-6 mx-auto px-4 sm:px-8">
                    {user ? (
                        <div>
                            <h1 className="text-2xl pl-1 border-bottom py-10 px-10 mt-8 font-semibold mb-4">Welkom, {user.displayName}</h1>
                            <span onClick={handleLogout} className="absolute right-3 top-3">
                                <IconLogout />
                            </span>
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
    } else {
        return (
            <div className="container w-screeen mx-auto px-4 sm:px-8 h-screen grid place-items-center">
                <div
                    role="status"
                    className="scale-150 max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                >
                    <span onClick={handleLogin} className=" text-offblack mb-1 px-4 py-2">
                        Login
                    </span>{' '}
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
};

export default Page;
