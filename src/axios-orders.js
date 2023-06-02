import axios from "axios";

const instance = axios.create({
  baseURL: "https://animalhospital-f996c-default-rtdb.firebaseio.com/"
});

export default instance;