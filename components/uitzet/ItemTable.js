'use client';
import React, { useEffect, useState } from 'react';
import Trash from '@/components/icons/Trash';
import Edit from '@/components/icons/Edit';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { firestore } from '@/lib/firebase';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

const ItemTable = ({ items, isLoading, handleDeleteItem, handleUpdateItem }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [editItem, setEditItem] = useState(null);
    const [expandedItems, setExpandedItems] = useState([]);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [deleteAllItems, setDeleteAllItems] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const handleOpenLightbox = (imageUrl) => {
        setLightboxOpen(true);
        setLightboxImage(imageUrl);
    };
    useEffect(() => {
        const fetchCheckedStatus = async () => {
            const checkedItemsRef = collection(firestore, 'itemStatus'); // Replace 'itemStatus' with the collection name where checked status is stored
            const snapshot = await getDocs(checkedItemsRef);
            const checkedItemsData = snapshot.docs.reduce((result, doc) => {
                result[doc.id] = doc.data().checked;
                return result;
            }, {});
            setCheckedItems(checkedItemsData);
        };

        fetchCheckedStatus();
    }, []);

    const handleCloseLightbox = () => {
        setLightboxOpen(false);
        setLightboxImage(null);
    };

    const truncatedDescription = (description) => {
        if (description) {
            return description.length > 25 ? `${description.substring(0, 45)}...` : description;
        }
        return '';
    };

    const handleReadMore = (itemId) => {
        if (expandedItems.includes(itemId)) {
            setExpandedItems(expandedItems.filter((id) => id !== itemId));
        } else {
            setExpandedItems([...expandedItems, itemId]);
        }
    };

    useEffect(() => {
        const results = items.filter((item) => {
            const title = item.title ?? ''; // Provide a fallback value in case item.title is undefined or null
            return title.toLowerCase().includes(searchValue.toLowerCase()) && (selectedCategory === '' || item.category === selectedCategory);
        });
        setFilteredItems(results);

        const totalPrice = results.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(totalPrice);
    }, [searchValue, selectedCategory, items]);

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        setSearchValue('');
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleOpenDeleteModal = (itemId) => {
        setDeleteItemId(itemId);
        setShowDeleteModal(true);
    };

    const handleDeleteAllItems = () => {
        setDeleteAllItems(true);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const router = useRouter();

    const handleConfirmDelete = () => {
        if (deleteAllItems) {
            const itemIdsToDelete = deleteAllItems ? items.map((item) => item.id) : [deleteItemId];
            itemIdsToDelete.forEach((itemId) => {
                handleDeleteItem(itemId);
            });
            setSelectedItems([]);
            setDeleteAllItems(false);
            setShowDeleteModal(false);
        } else if (deleteItemId) {
            handleDeleteItem(deleteItemId);
            setDeleteItemId(null);
            setShowDeleteModal(false);
            router.reload();
        }
    };

    const handleSelectItem = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }

        const isChecked = selectedItems.includes(itemId);

        // Save the checked status in Firestore
        const itemRef = doc(firestore, 'itemStatus', itemId);
        setDoc(itemRef, { checked: isChecked })
            .then(() => {
                console.log('Checked status saved in Firestore');
            })
            .catch((error) => {
                console.error('Error saving checked status:', error);
            });
    };
    const sortItemsByCategory = (items) => {
        const sortedItems = {};
        items.forEach((item) => {
            if (!sortedItems[item.category]) {
                sortedItems[item.category] = [];
            }
            sortedItems[item.category].push(item);
        });
        return sortedItems;
    };

    const sortItems = (items) => {
        if (sortBy === 'title') {
            items.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (titleA < titleB) return sortOrder === 'asc' ? -1 : 1;
                if (titleA > titleB) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
        } else if (sortBy === 'price') {
            items.sort((a, b) => {
                const priceA = a.price;
                const priceB = b.price;
                if (priceA < priceB) return sortOrder === 'asc' ? -1 : 1;
                if (priceA > priceB) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return items;
    };

    const handleSortBy = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const currentDate = format(new Date(), 'yyyy-MM-dd');

    const renderItems = (items) => {
        return Object.keys(items).map((category) => {
            const categoryItems = items[category];
            return (
                <>
                    <React.Fragment key={category}>
                        <div className="text-offblack border-gray-700 even:bg-gray-100 odd:bg-gray-200" key={category}>
                            {categoryItems.map((item) => (
                                <tr className="border-b dark:border-gray-700  content-start " key={item.id}>
                                    <td className="py-1 px-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => handleSelectItem(item.id)}
                                            className="form-checkbox rounded text-primary-500 focus:ring-primary-500"
                                        />
                                    </td>
                                    <td className="py-1 px-1 font-medium text-offblack">
                                        <span className={selectedItems.includes(item.id) ? 'line-through' : ''} onClick={() => handleSelectItem(item.id)}>
                                            <div className="flex gap flex-col" key={item.id}>
                                                <h4>{item.title}</h4>
                                                <h5 className="text-underline text-blue-400">
                                                    <Link href="{item.url}" target="_blank">
                                                        van: {item.title}
                                                    </Link>
                                                </h5>
                                            </div>
                                        </span>
                                    </td>
                                    <td className="py-1 px-1"> €{item.price},-</td>
                                    <td className="py-1 px-1">
                                        {item.imageUrl && (
                                            <div>
                                                <img className="max-w-[100px] cursor-pointer" src={item.imageUrl} alt={item.title} onClick={() => handleOpenLightbox(item.imageUrl)} />
                                                {lightboxOpen && (
                                                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                                                        <div className="max-w-full max-h-full">
                                                            <img className="max-w-full max-h-full" src={lightboxImage} alt={item.title} />
                                                        </div>
                                                        <button className="absolute top-0 right-0 m-4 text-white text-xl" onClick={handleCloseLightbox}>
                                                            X
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </td>
                                    <td className="py-1 px-1 w-[25vw]">
                                        {expandedItems.includes(item.id) ? item.description : truncatedDescription(item.description)}
                                        {item.description && item.description.length > 25 && (
                                            <span onClick={() => handleReadMore(item.id)}>{expandedItems.includes(item.id) ? 'Read Less' : 'Read More'}</span>
                                        )}
                                    </td>

                                    <td className="py-1 px-1 bg-teal-200 rounded-md text-black ">{item.category}</td>
                                    <td className="py-1 px-1 flex items-center">
                                        <span onClick={() => handleUpdateItem(item.id, item)} className="text-gray-500 hover:text-gray-800 cursor-pointer" aria-label="Edit">
                                            <Edit className="h-5 w-5" />
                                        </span>

                                        <span onClick={() => handleOpenDeleteModal(item.id)} className="ml-2 text-gay-800 hover:text-red-800" aria-label="Delete">
                                            <Trash className="h-5 w-5" />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </div>
                    </React.Fragment>
                </>
            );
        });
    };

    const sortedItems = sortItems(sortItemsByCategory(filteredItems));

    const enlargeImage = (imageUrl) => {
        console.log('Enlarging image:', imageUrl);
    };
    return (
        <div className="mx-auto mt-2">
            <div className="border relative mb-5 shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div className="w-full">
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="text-gray-900 text-sm rounded-lg boreder focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                                    placeholder="Search"
                                    required=""
                                    value={searchValue}
                                    onChange={handleSearch}
                                />
                            </div>
                        </form>
                        <div className="flex items-center space-x-2">
                            <span
                                className={`cursor-pointer font-semibold rounded-full py-1 px-2 ${selectedCategory === '' ? 'bg-primary-500 text-offblack' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => handleCategoryFilter('')}
                            >
                                All
                            </span>
                            {['Woonkamer', 'Badkamer', 'Slaapkamer', 'Hal', 'Misc', 'Keuken', 'Verbouwing(?)'].map((category) => {
                                const categoryItems = sortedItems[category] || [];

                                return (
                                    <span
                                        key={category}
                                        className={`cursor-pointer font-semibold rounded-full py-1 px-2 ${
                                            selectedCategory.includes(category) ? 'bg-primary-500 text-offblack' : 'bg-gray-200 text-gray-700'
                                        }`}
                                        onClick={() => handleCategoryFilter(category)}
                                    >
                                        {category}
                                        <span className="ml-1 text-xs font-bold">({categoryItems.length})</span>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left text-offblack">
                    <tbody>
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, index) => <tr key={index}></tr>)
                        ) : filteredItems.length === 0 ? (
                            <tr>
                                <td className="py-1 px-1">No items found.</td>
                            </tr>
                        ) : (
                            renderItems(sortedItems)
                        )}
                    </tbody>
                </table>
                {totalPrice > 0 && (
                    <div className="w-full text-right">
                        <span className="font-semibold">Total Price: </span>
                        <span className="ml-2">€{totalPrice}</span>
                    </div>
                )}
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-offwhite shadow-sm rounded-lg p-6 mx-4">
                        <p className="text-lg font-semibold mb-4">Are you sure you want to delete this item?</p>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 mr-2" onClick={handleConfirmDelete}>
                                Delete
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg shadow hover:bg-gray-400 dark:hover:bg-gray-700"
                                onClick={handleCloseDeleteModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemTable;
