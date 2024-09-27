import api from "../services/api/article";

export default {
  namespaced: true,
  state: {
    article: {
      id: "",
      title: "",
      createdOn: "",
      updatedOn: "",
      content: "",
      icon: "",
      authorId: "",
      status: "",
      author: {
        id: "",
        name: "",
      },
    },
    articles: [],
  },
  getters: {
    article: (state) => state.article,
    articles: (state) => state.articles,
  },
  mutations: {
    SET_ARTICLE(state, article) {
      state.article = article;
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async getArticles({ commit }) {
      try {
        const { data: articles } = await api.getArticles();
        commit("SET_ARTICLES", articles);
      } catch (error) {
        console.log(error);
      }
    },
    async getArticle({ commit }, id) {
      try {
        const { data: article } = await api.getArticle(id);
        commit("SET_ARTICLE", article);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
