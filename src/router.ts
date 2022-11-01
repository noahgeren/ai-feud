import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import { setupStore } from "./store";

import Index from "./pages/Index.vue";
import AccessCode from "./pages/AccessCode.vue";
import Lobby from "./pages/Lobby.vue";
import Prompt from "./pages/Prompt.vue";
import Answer from "./pages/Answer.vue";
import Score from "./pages/Score.vue";
import NotFound from "./pages/NotFound.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: Index },
    { path: "/start", component: AccessCode, props: { start: true }},
    { path: "/join", component: AccessCode, props: { start: false }},
    { path: "/game/:id/lobby", component: Lobby },
    { path: "/game/:id/prompt", component: Prompt },
    { path: "/game/:id/answer", component: Answer },
    { path: "/game/:id/score", component: Score },
    { path: "/:pathMatch(.*)*", component: NotFound }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

// Make sure store is setup before entering any game routes
let storeSetup = false;
router.beforeEach(async (to) => {
    if(to.path.startsWith("/game/") && !storeSetup && to.params.id) {
        // storeSetup = await setupStore((to.params.id as string).toUpperCase()) !== false;
        // if(!storeSetup) {
        //     return "/";
        // }
        // TODO: Make sure router is in correct state
    }
})