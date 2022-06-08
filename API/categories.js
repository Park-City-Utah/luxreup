import apiClient from "./Client";

const endpoint = "/categories"

const getCategories = () => apiClient.get(endpoint);

export default {
    getCategories,
}