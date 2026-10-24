
import axiosClient from "./axiosClient";

export const getStoreInformationApi = async () => {
  const response = await axiosClient.get("/store");
  return response.data;
};

export const getStoreLogoUrl = (path) => {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const origin =
    import.meta.env.VITE_API_ORIGIN ||
    (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api")
      .replace(/\/api\/?$/, "");

  return `${origin.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};
