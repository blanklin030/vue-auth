import Component from "@/router/component";

let baseRoute = [
  {
 path: "/login",
 component: Component.Login,
 name: "",
 hidden: true
  },
  {
 path: "/register",
 component: Component.Register,
 name: "",
 hidden: true
  },
  {
 path: "/",
 redirect: "/index",
 hidden: true
  }
];
export default baseRoute;
