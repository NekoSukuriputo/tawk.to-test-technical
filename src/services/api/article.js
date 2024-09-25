import api from "@/utils/api";

export default {
    getArticles: () => {
        return api.getApi("articles");
    },
    getArticle: (id) => {
        return api.getApi(`article/${id}`);
    },
};