import Auth from "../modules/Auth";
import axios from "axios";
//const URL = "http://192.168.0.19:3000";
const URL = "https://fshion-app.herokuapp.com/";
// const URL = "http://192.168.1.169:5000";

const API = (config) => {
  //header authorization
  if (Auth.user_token) {
    const token = Auth.getToken();
    config.headers = {
      authorization: token,
    };
  }
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: "net work error",
          status: 500,
        };
      }
      if (error.response.status === 401) {
        Auth.logout();
        throw error;
      }
      return Promise.reject(error);
    }
  );
  config.baseURL = URL;
  return axios(config);
};
export default API;
