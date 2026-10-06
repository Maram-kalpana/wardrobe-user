import axiosClient from "./axiosClient";

// If axiosClient's baseURL does NOT end with /api, change the paths to
// "/api/categories" and "/api/products".

export const getCategoriesApi = () => axiosClient.get("/categories");

export const getProductsByCategoryApi = (id) =>
  axiosClient.get("/products", { params: { category_id: id } });

export const getRecentProductsApi = (limit = 4) =>
  axiosClient.get("/products", { params: { limit } });