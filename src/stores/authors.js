import api from "../services/api/author";

export default {
  namespaced: true,
  state: {
    author: {
      id: "",
      name: "",
    },
    authors: [],
  },
  getters: {
    getAuthors: (state) => {
      return state.authors;
    },
    getAuthor: (state) => {
      return state.author;
    },
  },
  mutations: {
    SET_AUTHORS(state, authors) {
      state.authors = authors;
    },
    SET_AUTHOR(state, author) {
      state.author = author;
    },
  },
  actions: {
    async getAuthors({ commit }) {
      try {
        const authors = await api.getAuthors();
        commit("SET_AUTHORS", authors);
      } catch (error) {
        console.log(error);
      }
    },
    async getAuthor({ commit }, id) {
      try {
        const author = await api.getAuthor(id);
        commit("SET_AUTHOR", author);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
