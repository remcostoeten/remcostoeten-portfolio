import { useState } from 'react';
import { firestore } from '@/lib/firebase';

const Item = ({ id, name }) => {
    const [editing, setEditing] = useState(false);
    const [updatedName, setUpdatedName] = useState(name);

    const handleEdit = async () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
        setUpdatedName(name);
    };

    const handleUpdate = async () => {
        try {
            await firestore.collection('items').doc(id).update({ name: updatedName });
            setEditing(false);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await firestore.collection('items').doc(id).delete();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            {editing ? (
                <>
                    <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{name}</span>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Item;
