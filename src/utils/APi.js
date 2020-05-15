import axios from "axios";

export default {
  getBreeds() {
    return axios.get("https://dog.ceo/api/breeds/list/all");
  },
};
