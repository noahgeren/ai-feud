import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, ref as dbRef, onValue, get } from "firebase/database";

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

export interface Game {
    id: string;
    admin: string;
    created: number | object;
    question?: string;
    players?: {
        [key: string]: {
            name: string;
            answer?: string;
            team?: number;
        }
    };
    teams?: [{
        name: string;
        score: number;
        currentIndex: number;
        players: [string];
    }];
};
const isGame = (arg: any): arg is Game => arg.id !== undefined;

export const game = ref<Game | null>(null);

export const setupStore = async (gameId: string): Promise<boolean | void> => {
    // login user and track changes
    user.value = (await signInAnonymously(auth)).user;
    onAuthStateChanged(auth, (newUser) => {
        user.value = newUser;
    });
    // start tracking game
    const gameRef = dbRef(db, `/games/${gameId}/`);
    const data = (await get(gameRef)).val();
    // stop if data is not a game, user is not logged in, 
    // game has no players, or this user is not an admin or player.
    if(!isGame(data) || !user.value || !data.players || 
            (data.admin !== user.value.uid && !data.players[user.value.uid])) {
        return false;
    }
    game.value = {...data};
    onValue(gameRef, (snapshot) => {
        game.value = {...snapshot.val()};
    });
};