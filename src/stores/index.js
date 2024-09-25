import Vue from "vue";
import Vuex from "vuex";
import categories from "./categories";
import authors from "../services/api/authors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
    authors,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
