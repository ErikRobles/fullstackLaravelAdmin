import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import firstPage from "./components/pages/myFirstVuePage";
import newRoute from "./components/pages/newRoute";
import hooks from "./components/pages/basic/hooks.vue";
import methods from "./components/pages/basic/methods.vue";

// Admin Project Pages...

import home from "./components/pages/home";
import tags from "./admin/pages/tags";
import category from "./admin/pages/category";
import { templateSettings } from "lodash";

const routes = [
    // Project Routes...
    {
        path: "/",
        component: home
    },
    {
        path: "/tags",
        component: tags
    },
    {
        path: "/category",
        component: category
    },

    // Route testing

    {
        path: "/my-new-vue-route",
        component: firstPage
    },

    // Basic tutorial Routes...

    {
        path: "/my-new-vue-route",
        component: firstPage
    },
    {
        path: "/new-route",
        component: newRoute
    },

    // Vue hooks
    {
        path: "/hooks",
        component: hooks
    },
    // More basics
    {
        path: "/methods",
        component: methods
    }
];

export default new Router({
    mode: "history",
    routes
});
