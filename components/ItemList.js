import { useEffect, useState } from 'react';
import { firestore } from '@/lib/firebase';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const querySnapshot = await firestore.collection('items').get();
            const itemsData = querySnapshot.docs.map((doc) => doc.data());
            setItems(itemsData);
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
