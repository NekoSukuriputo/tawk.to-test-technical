import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores/index";
import "./assets/tailwind.css";
import filters from "./utils/filters";

Object.keys(filters).forEach((item) => {
  Vue.filter(item, filters[item]);
});

new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
