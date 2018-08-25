import Vue from "vue";
/**权限指令**/
const has = Vue.directive("has", {
 bind: function(el, binding, vnode) {
 if (!Vue.prototype.$_has(binding.value)) {
 el.parentNode.removeChild(el);
    }
  }
});
// 权限检查方法
Vue.prototype.$_has = function(value) {
 let isExist = false;
 //获取该用户的按钮权限
 let btnPermissions = JSON.parse(localStorage.getItem("button")) || [];
 if (btnPermissions.length <= 0) {
 return false;
  }
 if (btnPermissions.indexOf(String(value))) {
 isExist = true;
  }
 return isExist;
};

export { has };
