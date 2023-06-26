import React, { useState } from 'react';

const EditForm = ({ item, handleUpdateItem }) => {
    const [editedItem, setEditedItem] = useState({ ...item });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateItem(editedItem.id, editedItem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={editedItem.title} onChange={handleChange} />
            <input type="number" name="price" value={editedItem.price} onChange={handleChange} />
            <textarea name="description" value={editedItem.description} onChange={handleChange} />
            <input type="text" name="category" value={editedItem.category} onChange={handleChange} />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditForm;
