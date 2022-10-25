import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase } from "firebase/database";

const app = initializeApp({
    apiKey: "AIzaSyCsHnYxZdZ0qfDZrifoOPiH-Ps0soYlDuU",
    authDomain: "aifeud.firebaseapp.com",
    databaseURL: "https://aifeud-default-rtdb.firebaseio.com",
    projectId: "aifeud",
    storageBucket: "aifeud.appspot.com",
    messagingSenderId: "777427713264",
    appId: "1:777427713264:web:b61a4577ef4c12f1901635"
});

const auth = getAuth(app);
const db = getDatabase(app);

export const user = ref<User | null>(auth.currentUser);

// TODO: Subscribe to the game and check necessary conditions
export const setupStore = async (gameId: string): Promise<boolean | void> => {
    user.value = (await signInAnonymously(auth)).user;
};