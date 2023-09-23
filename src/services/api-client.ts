import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b84ff1ec64604de68b7d9a3af1b60937",
  },
});
