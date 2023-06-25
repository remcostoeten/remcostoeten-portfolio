import { useState } from 'react';
import { firestore } from '@/lib/firebase';

const ItemForm = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await firestore.collection('items').add({ name });
            setName(''); // Reset the form after successful submission
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div>
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default ItemForm;
