import Login from "./Login.vue";
import Home from "./Home.vue";
import Browse from "./Browse.vue";

export default [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/browse", component: Browse },
]