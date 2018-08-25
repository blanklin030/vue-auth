import Vue from "vue";
import Router from "vue-router";
import baseRoute from "@/router/baseRoute";

Vue.use(Router);
// 实例化路由
let router = new Router({
 routes: baseRoute
});

export default router;
