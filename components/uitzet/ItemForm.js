import React, { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { motion } from 'framer-motion';

const ItemForm = ({ title, price, category, url, description, handleAddItem, setTitle, setPrice, setCategory, setUrl, setDescription, categories }) => {
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        handleAddItem(e, image);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <motion.div className="flex flex-col" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <input className="bg-offblack w-[200px]" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <textarea className="bg-offblack w-[200px]" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />

                <div className="flex gap">
                    <input className="bg-offblack" type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
                    <input className="bg-offblack price max-w-sm" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price €" />
                </div>

                <select className="bg-offblack" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <input type="file" accept="image/*" onChange={handleImageChange} />

                <motion.button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                    Add Item
                </motion.button>
            </form>
        </motion.div>
    );
};

export default ItemForm;
