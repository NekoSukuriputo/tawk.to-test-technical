import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import "./assets/tailwind.css";
import filters from "./utils/filters";

Object.keys(filters).forEach((item) => {
  Vue.filter(item, filters[item]);
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
