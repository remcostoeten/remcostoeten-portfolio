// components/Item.js
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Item = ({ item = {}, onAdd, onUpdate }) => {
    const [title, setTitle] = useState(item.title || '');
    const [description, setDescription] = useState(item.description || '');
    const [price, setPrice] = useState(item.price || '');

    const handleAdd = () => {
        const newItem = { id: uuidv4(), title, description, price: parseFloat(price) };
        onAdd(newItem);
        setTitle('');
        setDescription('');
        setPrice('');
    };

    const handleUpdate = () => {
        const updatedItem = { ...item, title, description, price: parseFloat(price) };
        onUpdate(item.id, updatedItem);
    };

    return (
        <div className="mb-4">
            <input className="border-2 border-gray-300 p-2 w-full mb-2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="border-2 border-gray-300 p-2 w-full mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input className="border-2 border-gray-300 p-2 w-full mb-2" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button className={`p-2 w-full text-white ${!item.id ? 'bg-green-500' : 'bg-blue-500'}`} onClick={!item.id ? handleAdd : handleUpdate}>
                {!item.id ? 'Add' : 'Update'}
            </button>
        </div>
    );
};

export default Item;
