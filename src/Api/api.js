// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.unsplash.com",
//   params: {
//     client_id: "rgrjedvclkpWHPAbEoyQzd_v0Nz29kmKwMhIC5Ya8zE",
//     per_page: 12,
//     orientation: "landscape",
//   },
// });

// export const searchImages = (query, page = "1") => {
//   return instance.get("/search/photos", {
//     params: { ...instance.defaults.params, query, page },
//   });
// };

import axios from "axios";

const ACCES_KEY = "rgrjedvclkpWHPAbEoyQzd_v0Nz29kmKwMhIC5Ya8zE";

export const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const searchImages = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `/search/photos?query=${query}&page=${page}&per_page=12&client_id=${ACCES_KEY}`
  );
  return data.results;
};
