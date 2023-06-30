import React, { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

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
        <div className="flex flex-col" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <input className="bg-offwhite text-offblack w-[200px]" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <textarea className="bg-offwhite text-offblack w-[200px]" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />

                <div className="flex gap">
                    <input className="bg-offwhite text-offblack" type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
                    <input className="bg-offwhite text-offblack price max-w-sm" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price €" />
                </div>

                {categories.map((cat) => (
                    <label key={cat} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={category.includes(cat)}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setCategory([...category, cat]);
                                } else {
                                    setCategory(category.filter((c) => c !== cat));
                                }
                            }}
                            className="form-checkbox rounded text-primary-500 focus:ring-primary-500"
                        />
                        <span className="ml-2">{cat}</span>
                    </label>
                ))}

                <input type="file" accept="image/*" onChange={handleImageChange} />

                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default ItemForm;
