import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyB_OxFAbOowfYUU9v730OONfdj0ch1MuSE',
    authDomain: 'remcostoeten-docs.firebaseapp.com',
    projectId: 'remcostoeten-docs',
    storageBucket: 'remcostoeten-docs.appspot.com',
    messagingSenderId: '457325786920',
    appId: '1:457325786920:web:782eb6f05bb419f900c21d',
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
    } catch (error) {
        console.error('Error adding item:', error);
    }
}

export async function deleteItem(userId, itemId) {
    const itemRef = doc(collection(firestore, `users/${userId}/items`), itemId);
    await deleteDoc(itemRef);
}

export async function updateItem(userId, itemId, updatedItem) {
    const itemRef = doc(collection(firestore, `users/${userId}/items`), itemId);
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
