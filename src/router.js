import Vue from "vue"
import VueRouter from "vue-router";
import list from "./list"
import gear from "./gear"
import weapon from "./weapon"
import second from "./list-second"
import add from "./add"
import edit from "./edit"
Vue.use(VueRouter) //全局注册router管理器
var router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/heroes"
        },
        {
            path: "/heroes",
            component: second,
            children: [
                {
                    path: '',
                    component: list
                }, {
                    path: 'add',
                    component: add
                }, {
                    path: 'edit',
                    component: edit
                }
            ]
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