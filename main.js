import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "./router/initRouter";

//在console下的生产环境提示关闭
Vue.config.productionTip = false;

//加载路由中间件
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

// 实例化vue
new Vue({
 router,
 store,
 el: "#app",
 render: h => h(App)
});
