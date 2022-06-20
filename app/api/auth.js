const axios = require("axios");
export const LogUser = async (data) => {
  const api = `http://${data.api}:8080/api/auth/login`;
  try {
    const res = await axios.post(api, data);
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
