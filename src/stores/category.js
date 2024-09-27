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
    otherCategories: [],
  },
  getters: {
    category: (state) => state.category,
    categories: (state) => state.categories,
    otherCategories: (state) => state.otherCategories,
  },
  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_OTHER_CATEGORIES(state, categories) {
      state.otherCategories = categories;
    },
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const { data: categories } = await api.getCategories();
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
        const { data: category } = await api.getCategory(id);
        commit("SET_CATEGORY", category);
      } catch (error) {
        console.log(error);
      }
    },
    async getOtherCategories({ commit }, id) {
      try {
        const { data: categories } = await api.getCategories();
        const otherCategories = categories
          .filter((c) => c.id !== id && c.enabled)
          .sort((a, b) => a.order - b.order);
        commit("SET_OTHER_CATEGORIES", otherCategories);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
