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
                <div className="text-offblack border-gray-700 even:bg-gray-100 odd:bg-gray-200" key={category}>
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="colgroup" className="px-6 py-4 font-medium text-gray-900">
                                    {category}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                            {categoryItems.map((item) => (
                                <tr className="hover:bg-gray-50" key={item.id}>
                                    <td className="px-6 py-4 font-normal text-gray-900">
                                        <div className="relative h-10 w-10">
                                            {item.imageUrl && (
                                                <div>
                                                    <img
                                                        className="h-full w-full rounded-full object-cover object-center"
                                                        src={item.imageUrl}
                                                        alt={item.title}
                                                        onClick={() => handleOpenLightbox(item.imageUrl)}
                                                    />
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
                                            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 font-medium text-gray-700">€{item.price},-</td>
                                    <td className="text-sm px-6 py-4 text-gray-400">
                                        van: <Link href="{item.url}">{item.title}</Link>
                                    </td>
                                    <td className="text-sm px-6 py-4 text-gray-400">
                                        {' '}
                                        {expandedItems.includes(item.id) ? item.description : truncatedDescription(item.description)}
                                        {item.description && item.description.length > 66 && (
                                            <span onClick={() => handleReadMore(item.id)}>{expandedItems.includes(item.id) ? 'Read Less' : 'Read More'}</span>
                                        )}
                                    </td>
                                    <td className="text-sm px-6 py-4 text-gray-400">{item.category}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-4">
                                            <a x-data="{ tooltip: 'Delete' }" href="#" onClick={() => handleOpenDeleteModal(item.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </a>
                                            <a x-data="{ tooltip: 'Edit' }" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
