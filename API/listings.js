import apiClient from "./Client";

const endpoint = "/listings"

const getListings = () => apiClient.get(endpoint);

export default {
    getListings,
}