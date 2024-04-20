import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/photos/",
  params: {
    client_id: "rgrjedvclkpWHPAbEoyQzd_v0Nz29kmKwMhIC5Ya8zE",
    per_page: 12,
    page: 1,
    orientation: "landscape",
  },
});

export const searchImages = (query) => {
  return instance.get("", {
    params: { query },
  });
};
// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://pixabay.com/api/",
//   params: {
//     key: "40997072-7d01e146641751499ce6c78c3",
//     per_page: 12,
//     image_type: "photo",
//     orientation: "horizontal",
//   },
// });
// export const searchImages = (q, page = 1) => {
//   return instance.get("", { params: { q, page } });
// };
