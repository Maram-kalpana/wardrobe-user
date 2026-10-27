import axiosClient from "./axiosClient"; 
export const validateCouponApi = async (code, subtotal) => {
  const response = await axiosClient.post("/coupons/validate", { code, subtotal });
  return response.data; // { success, data: { code, discount } }
};