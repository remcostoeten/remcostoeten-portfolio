'use client';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import IconLogout from '@/components/icons/Logout';
import ItemForm from '@/components/uitzet/ItemForm';
import ItemTable from '@/components/uitzet/ItemTable';
import { addItem, getItems, updateItem, deleteItem, storage } from '@/lib/firebase';
import SignInClerk from './../../components/SignInClerk';
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


        const newNote = {
            note,
        };

        await addItem(user.uid, newNote);
        console.log('New item:', newNote);
    };
    const handleAddItem = async (e, image) => {
        e.preventDefault();


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
    return (
        <>
            <div className="h-screen w-max-[1600px] bg-white p-6 mx-auto px-4 sm:px-8">
                <h1 className="text-2xl pl-1 border-bottom mt-8 font-semibold mb-4">Welkom, {user?.displayName}</h1>
                <p className="mb-4">
                    Create lists, for instance all the items i'll be needing to purcashe for when i'm moving on my own. Personal lists are unique per logged in user so no one can see the lists you've
                    made.
                </p>
                <span onClick={handleLogout} className="absolute right-3 top-3">
                    <IconLogout />
                </span>

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
