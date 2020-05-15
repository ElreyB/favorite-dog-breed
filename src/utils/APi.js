import axios from "axios";

export default {
  getBreeds() {
    return axios.get("https://dog.ceo/api/breeds/list/all");
  },
  getBreed(query) {
    return axios.get(`https://dog.ceo/api/breed/${query}/images/random`);
  },
};
