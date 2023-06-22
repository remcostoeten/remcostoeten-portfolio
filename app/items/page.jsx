'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Item from '../components/Item';
import Total from '../components/Total';

const IndexPage = () => {
    const [items, setItems] = useState([]);
    const router = useRouter();

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const handleUpdateItem = (id, updatedItem) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? updatedItem : item)));
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Add New Item</h1>
            <Item onAdd={handleAddItem} onUpdate={handleUpdateItem} />
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Item List</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Item item={item} onAdd={handleAddItem} onUpdate={handleUpdateItem} />
                        </li>
                    ))}
                </ul>
                <Total items={items} />
            </div>
        </div>
    );
};

export default IndexPage;
