import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.astrogyata.in/api",
  // baseURL: "http://localhost:4000",
  // baseURL:"http://192.168.1.145:5000/"
});
export const panchanURL = axios.create({
  baseURL: "https://json.astrologyapi.com",
});

export default instance;
