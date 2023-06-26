'use client';
import React, { useEffect, useState } from 'react';
import Trash from '@/components/icons/Trash';
import Edit from '@/components/icons/Edit';

const ItemTable = ({ items, isLoading, handleDeleteItem, handleUpdateItem }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [editItem, setEditItem] = useState(null);

    const truncatedDescription = (description) => {
        return description.length > 25 ? `${description.substring(0, 45)}...` : description;
    };

    const handleEditItem = (itemId, item) => {
        setEditItem({ id: itemId, ...item });
    };

    const handleReadMore = (description) => {
        return description;
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

    return (
        <div className="mx-auto mt-2">
            <div className="border relative shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div className="w-full md:w-1/2">
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
                            <span className={`cursor-pointer ${selectedCategory === '' ? 'font-semibold' : ''}`} onClick={() => handleCategoryFilter('')}>
                                All
                            </span>
                            {['Woonkamer', 'Badkamer', 'Slaapkamer'].map((category) => (
                                <span key={category} className={`ml-4 cursor-pointer ${selectedCategory === category ? 'font-semibold' : ''}`} onClick={() => handleCategoryFilter(category)}>
                                    {category}
                                    <span className="ml-2"> ({category.length})</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left text-offwhite">
                    <tbody>
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, index) => <tr key={index}></tr>)
                        ) : filteredItems.length === 0 ? (
                            <tr>
                                <td className="px-4 py-3">No items found.</td>
                            </tr>
                        ) : (
                            filteredItems.map((item) => (
                                <tr className="border-b dark:border-gray-700" key={item.id}>
                                    <td className="px-4 py-3 font-medium text-offwhite">{item.title}</td>
                                    <td className="px-4 py-3">{item.price}</td>
                                    <td className="px-4 py-3">
                                        {truncatedDescription(item.description)}
                                        {item.description.length > 25 && <span onClick={() => handleReadMore(item.id, item)}>Read More</span>}
                                    </td>
                                    <td className="px-4 py-3">{item.category}</td>
                                    <td className="px-4 py-3 flex items-center">
                                        <span onClick={() => handleUpdateItem(item.id, item)} className="text-gray-500 hover:text-gray-800 cursor-pointer" aria-label="Edit">
                                            <Edit className="h-5 w-5" />
                                        </span>

                                        <span onClick={() => handleDeleteItem(item.id)} className="ml-2 text-gay-800 hover:text-red-800" aria-label="Delete">
                                            <Trash className="h-5 w-5" />
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                {totalPrice > 0 && (
                    <div className="w-full md:w-1/2 text-right">
                        <span className="font-semibold">Total Price: </span>
                        <span className="ml-2">€{totalPrice}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemTable;
