import Vue from "vue";
import Vuex from "vuex";
import category from "./category";
import author from "./author";
import article from "./article";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    author,
    article,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
