import Vue from "vue"
import VueRouter from "vue-router";
import list from "./list"
import gear from "./gear"
import weapon from "./weapon"
Vue.use(VueRouter) //全局注册router管理器
var router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/heroes"
        },
        {
            path: "/heroes",
            component: list
        },
        {
            path: "/gear",
            component: gear
        },
        {
            path: "/weapon",
            component: weapon
        }
    ]
})
export default router;