import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, addDoc, collection, deleteDoc, updateDoc, getDocs, doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDzfMqKmwTct-FyOk9LANL35NM8XDSAhls',
    authDomain: 'remcostoeten-portfolio.firebaseapp.com',
    projectId: 'remcostoeten-portfolio',
    storageBucket: 'remcostoeten-portfolio.appspot.com',
    messagingSenderId: '351066038340',
    appId: '1:351066038340:web:e8e81bc50a17437a1e9c11',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const googleAuthProvider = new GoogleAuthProvider();

export async function addItem(userId, item) {
    try {
        const docRef = await addDoc(collection(firestore, `users/${userId}/items`), item);
        console.log('Item added with ID:', docRef.id);
        return { id: docRef.id, ...item };
    } catch (error) {
        console.error('Error adding item:', error);
    }
}

export async function deleteItem(userId, itemId) {
    const itemRef = doc(firestore, `users/${userId}/items`, itemId);
    await deleteDoc(itemRef);
}

export async function updateItem(userId, itemId, updatedItem) {
    const itemRef = doc(firestore, `users/${userId}/items`, itemId);
    await updateDoc(itemRef, updatedItem);
}

export async function getItems(userId) {
    const itemsCollection = collection(firestore, `users/${userId}/items`);
    const snapshot = await getDocs(itemsCollection);

    const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return items;
}

export { auth, firestore, storage, googleAuthProvider };
