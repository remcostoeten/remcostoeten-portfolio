import React from 'react';
import Trash from '@/components/icons/Trash';
import Edit from '@/components/icons/Edit';
import AZ from '../icons/AZ';
import priceSort from '../icons/priceSort';

const ItemTable = ({ items, isLoading, handleSortItems, handleSortByPrice, handleDeleteItem, handleUpdateItem, handleToggleCategory, handleReadMore, toggleDescription, showFullDescription }) => {
    const truncatedDescription = (description) => {
        return description.length > 25 ? `${description.substring(0, 25)}...` : description;
    };

    return (
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

                                      return (
                                          <tr key={item.id}>
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
                                                          <p className="text-gray-900 whitespace-no-wrap">{truncatedDescription(item.description)}</p>
                                                          <span onClick={() => handleReadMore(item.description)} className="text-blue-500 font-semibold">
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
    );
};

export default ItemTable;
