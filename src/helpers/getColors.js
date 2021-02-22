import axiosWithAuth from "./axiosWithAuth";

export const getColors = async () => {
  return await axiosWithAuth()
    .get(`/colors`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
