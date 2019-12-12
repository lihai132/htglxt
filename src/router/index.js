//引入vue
import Vue from 'vue';
//引入vue-router
import Router from 'vue-router';
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};
//使用vue-router
Vue.use(Router);


//引入页面组件
import home from '../pages/home.vue';
import notfound from '../pages/notfound.vue';
import lw1 from "../components/home/lw/lw1.vue";
import lw2 from "../components/home/lw/lw2.vue";

import zj1 from "../components/home/zj/zj1.vue";
import zj2 from "../components/home/zj/zj2.vue";
import zj3 from "../components/home/zj/zj3.vue";
import zj4 from "../components/home/zj/zj4.vue";

import fj1 from "../components/home/fj/fj1.vue";
import fj2 from "../components/home/fj/fj2.vue";
import fj3 from "../components/home/fj/fj3.vue";
import jb from "../components/home/jb/jb.vue";
import gg from "../components/home/gg/gg.vue";
import yh1 from "../components/home/yh/yh1.vue";
import yh2 from "../components/home/yh/yh2.vue";
import yh3 from "../components/home/yh/yh3.vue";
import xy1 from "../components/home/xy/xy1.vue";
import xy2 from "../components/home/xy/xy2.vue";
import zd1 from "../components/home/zd/zd1.vue";
import zd2 from "../components/home/zd/zd2.vue";
import zd3 from "../components/home/zd/zd3.vue";
import qx from "../components/home/qx/qx.vue";



//实例化router并配置参数
let router = new Router({
    routes: [{
            name: 'home',
            path: '/Home',
            component: home,
            children: [{
                name: 'lw1',
                path: '/lw1',
                component: lw1
            }, {
                name: 'lw2',
                path: '/lw2',
                component: lw2
            }, {
                name: 'zj1',
                path: '/zj1',
                component: zj1
            }, {
                name: 'zj2',
                path: '/zj2',
                component: zj2
            }, {
                name: 'zj3',
                path: '/zj3',
                component: zj3
            }, {
                name: 'zj4',
                path: '/zj4',
                component: zj4
            }, {
                name: 'fj1',
                path: '/fj1',
                component: fj1
            }, {
                name: 'fj2',
                path: '/fj2',
                component: fj2
            }, {
                name: 'fj3',
                path: '/fj3',
                component: fj3
            }, {
                name: 'jb',
                path: '/jb',
                component: jb
            }, {
                name: 'gg',
                path: '/gg',
                component: gg
            }, {
                name: 'yh1',
                path: '/yh1',
                component: yh1
            }, {
                name: 'yh2',
                path: '/yh2',
                component: yh2
            }, {
                name: 'yh3',
                path: '/yh3',
                component: yh3
            }, {
                name: 'xy1',
                path: '/xy1',
                component: xy1
            }, {
                name: 'xy2',
                path: '/xy2',
                component: xy2
            }, {
                name: 'zd1',
                path: '/zd1',
                component: zd1
            }, {
                name: 'zd2',
                path: '/zd2',
                component: zd2
            }, {
                name: 'zd3',
                path: '/zd3',
                component: zd3
            }, {
                name: 'qx',
                path: '/qx',
                component: qx
            }, {
                path: '/',
                redirect: 'Home'
            }]
        },
        {
            path: '/',
            redirect: 'lw1'
        },
        {

            path: '/404',
            component: notfound

        },
        {

            path: '*',
            redirect: '/404'

        }

    ]


});


export default router;