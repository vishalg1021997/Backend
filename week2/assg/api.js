import axios from "axios";

const API = (url, method = "get", body = {}) => {
  let abc = `https://dog.ceo/api/${url}`;
  try {
    return axios({ method, url: abc, body })
      .then((res) => {
        return { data: res.data, code: 200 };
      })
      .catch((err) => {
        return err.response.data;
      });
  } catch (error) {
    return {
      status: 400,
      message: "SOME ERROR",
    };
  }
};

export default API;

