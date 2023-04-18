import Login from "./Login.vue";
import Home from "./Home.vue";
import Browse from "./Browse.vue";
import Settings from "./Settings.vue";

export default [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/browse", component: Browse },
    { path: "/settings", component: Settings },
]