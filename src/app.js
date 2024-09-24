import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import "./assets/tailwind.css";

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
