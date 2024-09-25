import api from "@/utils/api";

export default {
    getAuthor: (id) => {
        return api.getApi(`author/${id}`);
    },
    getAuthors: () => {
        return api.getApi("authors");
    }
}