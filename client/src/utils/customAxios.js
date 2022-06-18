import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://node-with-react-login.herokuapp.com",
  withCredentials: true,
});

export default customAxios;
