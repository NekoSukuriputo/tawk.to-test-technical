import api from "../services/api/category";

export default {
  namespaced: true,
  state: {
    category: {
      id: "",
      title: "",
      description: "",
      createdOn: "",
      updatedOn: "",
      enabled: "",
      order: "",
      icon: "",
      totalArticle: "",
    },
    categories: [],
  },
  getters: {
    category: (state) => state.category,
    categories: (state) => state.categories,
  },
  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const categories = await api.getCategories();
        commit("SET_CATEGORIES", categories);
      } catch (error) {
        console.log(error);
      }
    },
    async getCategory({ commit }, id) {
      try {
        const category = await api.getCategory(id);
        commit("SET_CATEGORY", category);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
