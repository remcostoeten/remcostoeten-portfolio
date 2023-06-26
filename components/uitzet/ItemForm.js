import React from 'react';

const ItemForm = ({ title, price, category, url, description, handleAddItem, setTitle, setPrice, setCategory, setUrl, setDescription, categories }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddItem(e);
    };

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default ItemForm;
