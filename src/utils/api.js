import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/api/',
});
export default {
  getApi: (endpoint) => {
    return axiosInstance.get(endpoint);
  },
  postApi: (endpoint, payload) => {
    return axiosInstance.post(endpoint, payload);
  },
  updateApi: (endpoint, payload) => {
    return axiosInstance.put(endpoint, payload);
  },
  deleteApi: (endpoint, slug) => {
    return axiosInstance.delete(`${endpoint}/${slug}`);
  },
};
