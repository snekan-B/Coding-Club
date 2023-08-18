import axios from "axios";
//axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
export async function formsubmit(credentials) {
  try {
    const {
      data: { msg },
    } = await axios.post(`http://localhost:8000/api/register`, credentials);
    return Promise.resolve(msg);
  } catch (error) {
    console.log(error.response);
    return Promise.reject({ error });
  }
}
