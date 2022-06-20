const axios = require("axios");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlkIjoiYWRtaW4iLCJpYXQiOjE2NTQ1OTc1MDIsImV4cCI6MTY1NTc5NzUwMn0.VcL5KI4ErZ8oO6TG-xXV2uUnPF6rMTQQ57CgV9NmxSY";


export const getDoctors = async (endpoint,Mytoken) => {
  const api = `http://${endpoint}:8080/api`;
  console.log("api ddd",endpoint)

  try {
    const res = await axios.get(api + "/user", {
      headers: {
        Authorization: Mytoken,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const getPatientAsset = async (endpoint,patient) => {
  const api = `http://${endpoint}:8080/api`;
  try {
    const res = await axios.get(api + "/asset/hest/" + patient, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};

export const giveAccess = async (endpoint,data) => {
  const api = `http://${endpoint}:8080/api`;

  try {
    const res = await axios.post(api + "/user/giveAccess",data ,{
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const revokeAccess = async (endpoint,data) => {
  const api = `http://${endpoint}:8080/api`;

  try {
    const res = await axios.post(api + "/user/revokeAccess",data ,{
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
export const getUser = async (endpoint,email) => {
  const api = `http://${endpoint}:8080/api`;

  try {
    const res = await axios.get(api + "/user/"+email ,{
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.error("error", e);
  }
};
