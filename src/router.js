import Vue from "vue"
import VueRouter from "vue-router";
import list from "./list"
import gear from "./gear"
import weapon from "./weapon"
import second from "./list-second"
import add from "./add"
import edit from "./edit"
Vue.use(VueRouter) //全局注册router管理器

export default  new VueRouter({
    linkActiveClass : "active",
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
                    path: 'edit/:id', //定义动态路由的形参
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
