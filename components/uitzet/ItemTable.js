'use client';
import React, { useEffect, useState } from 'react';
import Trash from '@/components/icons/Trash';
import Edit from '@/components/icons/Edit';
import { motion } from 'framer-motion';

const ItemTable = ({ items, isLoading, handleDeleteItem, handleUpdateItem, handleReadMore }) => {
    let [searchValue, setSearchValue] = useState('');
    let [filteredItems, setFilteredItems] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('');
    let [totalPrice, setTotalPrice] = useState(0);
    let [editItem, setEditItem] = useState(null);
    let [expandedItems, setExpandedItems] = useState([]);
    let [deleteItemId, setDeleteItemId] = useState(null);
    let [showDeleteModal, setShowDeleteModal] = useState(false);
    let [selectedItems, setSelectedItems] = useState([]);

    const truncatedDescription = (description) => {
        return description.length > 25 ? `${description.substring(0, 45)}...` : description;
    };

    const handleEditItem = (itemId, item) => {
        setEditItem({ id: itemId, ...item });
    };

    const handleReadMore = (itemId) => {
        if (expandedItems.includes(itemId)) {
            setExpandedItems(expandedItems.filter((id) => id !== itemId));
        } else {
            setExpandedItems([...expandedItems, itemId]);
        }
    };

    useEffect(() => {
        const results = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()) && (selectedCategory === '' || item.category === selectedCategory));
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

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleConfirmDelete = () => {
        if (deleteItemId) {
            handleDeleteItem(deleteItemId);
            setDeleteItemId(null);
            setShowDeleteModal(false);
        }
    };

    const handleSelectItem = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const handleDeleteSelectedItems = () => {
        selectedItems.forEach((itemId) => {
            handleDeleteItem(itemId);
        });
        setSelectedItems([]);
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

    const renderItems = (items) => {
        return Object.keys(items).map((category) => {
            const categoryItems = items[category];
            return (
                <React.Fragment key={category}>
                    <tr className="border-b dark:border-gray-700">
                        <td colSpan="7" className="px-4 py-2 font-semibold text-lg text-offwhite">
                            {category}
                        </td>
                    </tr>
                    {categoryItems.map((item) => (
                        <tr className="border-b dark:border-gray-700" key={item.id}>
                            <td className="px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleSelectItem(item.id)}
                                    className="form-checkbox rounded text-primary-500 focus:ring-primary-500"
                                />
                            </td>
                            <td className="px-4 py-3 font-medium text-offwhite">
                                <span className={selectedItems.includes(item.id) ? 'line-through' : ''} onClick={() => handleSelectItem(item.id)}>
                                    {item.title}
                                </span>
                            </td>
                            <td className="px-4 py-3">{item.price}</td>
                            <td className="px-4 py-3">
                                {item.imageUrl && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={item.imageUrl} alt={item.title} />
                                )}
                            </td>
                            <td className="px-4 py-3">
                                {expandedItems.includes(item.id) ? item.description : truncatedDescription(item.description)}
                                {item.description.length > 25 && <span onClick={() => handleReadMore(item.id)}>{expandedItems.includes(item.id) ? 'Read Less' : 'Read More'}</span>}
                            </td>
                            <td className="px-4 py-3">{item.category}</td>
                            <td className="px-4 py-3 flex items-center">
                                <span onClick={() => handleUpdateItem(item.id, item)} className="text-gray-500 hover:text-gray-800 cursor-pointer" aria-label="Edit">
                                    <Edit className="h-5 w-5" />
                                </span>

                                <span onClick={() => handleOpenDeleteModal(item.id)} className="ml-2 text-gay-800 hover:text-red-800" aria-label="Delete">
                                    <Trash className="h-5 w-5" />
                                </span>
                            </td>
                        </tr>
                    ))}
                </React.Fragment>
            );
        });
    };

    const sortedItems = sortItemsByCategory(filteredItems);

    return (
        <motion.div className="mx-auto mt-2">
            <motion.div className="border relative shadow-md sm:rounded-lg overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div className="w-full md:w-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
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
                                    className="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-offblack dark:border-gray-600"
                                    placeholder="Search"
                                    required=""
                                    value={searchValue}
                                    onChange={handleSearch}
                                />
                            </div>
                        </form>
                        <div className="mt-2">
                            <motion.span
                                className={`cursor-pointer ${selectedCategory === '' ? 'font-semibold' : ''}`}
                                onClick={() => handleCategoryFilter('')}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                All
                            </motion.span>
                            {['Woonkamer', 'Badkamer', 'Slaapkamer'].map((category) => {
                                const categoryItems = sortedItems[category] || [];

                                return (
                                    <motion.span
                                        key={category}
                                        className={`ml-4 cursor-pointer ${selectedCategory === category ? 'font-semibold' : ''}`}
                                        onClick={() => handleCategoryFilter(category)}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {category}
                                        <span className="ml-2"> ({categoryItems.length})</span>
                                    </motion.span>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div className="absolute right-[15px] top-[15px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <motion.span
                            className="px-4 py-2 text-white rounded-lg shadow"
                            onClick={handleDeleteSelectedItems}
                            disabled={selectedItems.length === 0}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Delete All
                        </motion.span>
                    </motion.div>
                </motion.div>
                <motion.table className="w-full text-sm text-left text-offwhite" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <motion.tbody>
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, index) => <tr key={index}></tr>)
                        ) : filteredItems.length === 0 ? (
                            <tr>
                                <td className="px-4 py-3">No items found.</td>
                            </tr>
                        ) : (
                            renderItems(sortedItems)
                        )}
                    </motion.tbody>
                </motion.table>
                {totalPrice > 0 && (
                    <motion.div className="w-full md:w-1/2 text-right" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <span className="font-semibold">Total Price: </span>
                        <span className="ml-2">€{totalPrice}</span>
                    </motion.div>
                )}
            </motion.div>

            {/* Delete confirmation modal */}
            {showDeleteModal && (
                <motion.div className="fixed inset-0 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mx-4">
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
                </motion.div>
            )}
        </motion.div>
    );
};

export default ItemTable;
