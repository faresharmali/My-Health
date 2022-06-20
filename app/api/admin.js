const api = "http://192.168.100.3:8080/api";
const axios = require("axios");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlkIjoiYWRtaW4iLCJpYXQiOjE2NTQ1OTc1MDIsImV4cCI6MTY1NTc5NzUwMn0.VcL5KI4ErZ8oO6TG-xXV2uUnPF6rMTQQ57CgV9NmxSY";

export const CreateUser = async (data) => {
  try {
    const res = await axios.post(api + "/user", data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const GetUsers = async (data) => {
  try {
    const res = await axios.get(api + "/user", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const DeleteUser = async (data) => {
  try {
    const res = await axios.delete(api + "/user", {
      headers: {
        Authorization: token,
      },
      data
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
