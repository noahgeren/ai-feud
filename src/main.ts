import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./router";
import { initializeApp } from "firebase/app";
import "./style.css";

initializeApp({
    apiKey: "AIzaSyCsHnYxZdZ0qfDZrifoOPiH-Ps0soYlDuU",
    authDomain: "aifeud.firebaseapp.com",
    databaseURL: "https://aifeud-default-rtdb.firebaseio.com",
    projectId: "aifeud",
    storageBucket: "aifeud.appspot.com",
    messagingSenderId: "777427713264",
    appId: "1:777427713264:web:b61a4577ef4c12f1901635"
});

createApp(App).use(router).mount("#app");
