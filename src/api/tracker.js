/*
  Component to get access to api over the internet
*/
import axios from "axios";

//Adding local storage to grab token on device
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://e8f9-5-186-75-38.eu.ngrok.io",
});

// Do this before exporting, attacth token to request if its exists
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
