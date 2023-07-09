import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, addDoc, collection, deleteDoc, updateDoc, getDocs, doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const googleAuthProvider = new GoogleAuthProvider();
const db = firestore;

const singInWithGoogle = () => {
    console.log('signing in with google');
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log(user, 'succesfully signed in.' + token);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error.code);
            console.log(error);
        });
};

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

export { auth, firestore, storage, googleAuthProvider, db, getDocs };
