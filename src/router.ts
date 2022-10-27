import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import { setupStore } from "./store";

import Index from "./pages/Index.vue";
import StartGame from "./pages/admin/StartGame.vue";
import JoinGame from "./pages/player/JoinGame.vue";
import Question from "./pages/common/Question.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: Index },
    { path: "/start", component: StartGame},
    { path: "/join", component: JoinGame },
    { path: "/game/:id/question", component: Question }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

// Make sure store is setup before entering any game routes
let storeSetup = false;
router.beforeEach(async (to) => {
    if(to.path.startsWith("/game") && !storeSetup) {
        storeSetup = await setupStore(to.params.id as string) !== false;
        if(!storeSetup) {
            return "/";
        }
        // TODO: Make sure router is in correct state
    }
})