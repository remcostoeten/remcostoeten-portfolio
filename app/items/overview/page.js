'use client';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { addItem, getItems, updateItem, deleteItem } from '@/lib/firebase';
import Trash from '@/components/icons/Trash';
import Edit from '@/components/icons/Edit';
import AZ from '@/components/icons/AZ';
import priceSort from '@/components/icons/priceSort';
import Search from '@/components/uitzet/Search';

export default function Page() {
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
    const [categories, setCategories] = useState(['All Items', 'Woonkamer', 'Category 2', 'Category 3']);
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

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const handleReadMore = (description) => {
        setSelectedItemDescription(description);
        setShowModal(true);
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

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() === '') {
            setItems(userItems); // Show all items if search term is empty
        } else {
            const filteredItems = userItems.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setItems(filteredItems); // Update items state with filtered items
        }
        setSelectedCategory('All Items'); // Reset selected category
        setSelectedItem(null); // Reset selected item
    };

    return (
        <>
            <div className="antialiased w-screen h-screen font-sans bg-gray-200">
                <div className="container mx-auto px-4 sm:px-8">
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
                    <div className="flex flex-col">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                        <button onClick={handleAddItem} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                            Add Item
                        </button>
                    </div>

                    <div className="py-8">
                        <div className="flex gap-2 mt-2 mb-2 p-4">
                            <span onClick={handleSortItems}>
                                <AZ />
                            </span>
                            <span onClick={handleSortByPrice}>
                                <priceSort />
                            </span>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rol</th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created at</th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="relative">
                                        {isLoading
                                            ? Array.from({ length: 5 }).map((_, index) => (
                                                  <tr key={index}>
                                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm animate-pulse">
                                                          <div className="h-4 bg-gray-300 rounded"></div>
                                                      </td>
                                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm animate-pulse">
                                                          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                                      </td>
                                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm animate-pulse">
                                                          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                                      </td>
                                                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm animate-pulse">
                                                          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                                      </td>
                                                  </tr>
                                              ))
                                            : items.map((item) => {
                                                  const itemDate = new Date(item.date).toLocaleDateString();
                                                  const truncatedDescription = item.description.substring(0, 25);
                                                  return (
                                                      <div key={item.id}>
                                                          <div className="bg-offwhite flex space-between">
                                                            <span className='text-offBlack'
                                                          </div>
                                                          <tr className="bg-white">
                                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                  <div className="flex items-center">
                                                                      <div className="ml-3">
                                                                          <p className="text-gray-900 whitespace-no-wrap">{item.title}</p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                  {item.description.length > 25 ? (
                                                                      <div>
                                                                          <p className="text-gray-900 whitespace-no-wrap">{truncatedDescription}...</p>
                                                                          <span onClick={toggleDescription} className="text-blue-500 font-semibold">
                                                                              Read More
                                                                          </span>
                                                                      </div>
                                                                  ) : (
                                                                      <h1>test</h1>
                                                                  )}
                                                              </td>
                                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                  <p className="text-gray-900 whitespace-no-wrap">{itemDate}</p>
                                                              </td>
                                                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                      <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                      <span className="relative">{item.category}</span>
                                                                  </span>
                                                              </td>
                                                              <td className="px-5 py-5 border-b border-gray-200 bg-white flex text-sm">
                                                                  <span className="mr-2" onClick={() => handleDeleteItem(item.id)}>
                                                                      <Trash />
                                                                  </span>
                                                                  <span onClick={() => handleUpdateItem(item.id)}>
                                                                      <Edit />
                                                                  </span>
                                                              </td>
                                                          </tr>
                                                          {showFullDescription && (
                                                              <tr>
                                                                  <td colSpan="5" className="bg-white">
                                                                      <p className="absolute top-0 shadow-sm w-2/4  whitespace-no-wrap p-4 bg-white text-offblack w-">{item.description}</p>
                                                                  </td>
                                                              </tr>
                                                          )}
                                                      </div>
                                                  );
                                              })}
                                    </tbody>
                                </table>
                                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                    <span className="text-xs xs:text-sm text-gray-900">Showing {items.length} Entries</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
