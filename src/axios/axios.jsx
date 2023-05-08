import axios from "axios";

const ecommerceAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default ecommerceAxios;
