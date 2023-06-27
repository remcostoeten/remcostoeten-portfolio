import React from 'react';

const ItemForm = ({ title, price, category, url, description, handleAddItem, setTitle, setPrice, setCategory, setUrl, setDescription, categories }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddItem(e);
    };

    return (
        <div className="flex flex-col">
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
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default ItemForm;