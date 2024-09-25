import api from "@/utils/api";
export default {
  getCategories: () => {
    return api.getApi("categories");
  },
  getCategory: (id) => {
    return api.getApi(`category/${id}`);
  },
};
