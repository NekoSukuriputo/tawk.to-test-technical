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
        const {data: categories} = await api.getCategories();
        const activeCategories = categories
          .filter((c) => c.enabled)
          .sort((a, b) => a.order - b.order);
        // console.log("activeCategories :>> ", activeCategories);
        commit("SET_CATEGORIES", activeCategories);
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
