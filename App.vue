<template>
 <router-view id="app"></router-view>
</template>

<script>
import Vue from "vue";
import has from "@/common/js/btnPermissions.js";
import { getUserInfo } from "@/api/user/index";
import errorRoute from "@/router/errorRoute";
import Component from "@/router/component";
import cookie from "@/common/js/cookie";
export default {
 name: "app",
 data() {
 return {
 menuData: null,
 userData: null
    };
  },
 methods: {
 //解构路由懒加载组件
 assignComponent(routerConfig) {
 let config = [];
 routerConfig.forEach(item => {
 if (!item.component) {
 return true;
        }
 let row = { path: item.path, name: item.name };
 row.component = Component[`${item.component}`];
 if (item.children && item.children.length > 0) {
 row.children = this.assignComponent(item.children);
        }
 config.push(row);
      });
 return config;
    }
  },
 created() {
 //获取开发环境
 const ENV = process.env.NODE_ENV;
 let vm = this;
 if (ENV == "development") {
 let token = cookie.get("token") || "";
 let name = cookie.get("name") || "";
 if (token.length <= 0 || name.length <= 0) {
 vm.$router.push("/login");
 return false;
      }
    }
 //异步获取用户详情
 let asyncRouter = localStorage.getItem("router");
 let menu = JSON.parse(localStorage.getItem("menu"));
 getUserInfo({}).then(res => {
 let { error, status, data } = res;
 if (status === 200) {
 localStorage.setItem("router", JSON.stringify(data.router));
 delete data.router;
 localStorage.setItem("menu", JSON.stringify(data.menu));
 delete data.menu;
 localStorage.setItem("user", JSON.stringify(data));
      }
    });
 if (asyncRouter && menu) {
 // 动态添加路由
 vm.$router.addRoutes(vm.assignComponent(JSON.parse(asyncRouter)));
 vm.$router.addRoutes(errorRoute);
 //当前路由不在权限里
 vm.$router.beforeEach((to, from, next) => {
 if (to.path != "/401") {
 if (!menu.includes(to.path)) {
 next("/401");
          } else {
 next();
          }
        } else {
 next();
        }
      });
    }
  }
};
</script>
