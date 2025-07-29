import axios from "axios";
import {
  register,
  
}from "./Url"

const postAPI = async (url, body) => {

  try {
    console.log("postAPI",body)
    body = { ...body };
    const headers = {
      "Content-Type": "application/json"
    }
    console.log("Url POst API", body, url)
    const response = await axios.post(url, body, { headers });
    console.log("frist my", response)
    if (response.data.Success) {
      return response.data;
    } else {
      alert(response.data.Message);
      throw response.data.Message;

    }
  } catch (e) {
    console.log("Error is", e)
    alert(e);
  }
};

const getAPI = async (url, params) => {
  try {

    const response = await axios.get(url, params);
    if (response.data.Success) {
      return response.data.Message;
    } else {
      throw response.data.Error;
    }
  } catch (e) {
    alert(e);
  }
};

const patchAPI = async (url, body) => {
  try {
    body = { ...body };
    const response = await axios.patch(url, body);
    if (response.data.Success) {
      return response.data.Message;
    } else {
      throw response.data.Error;
    }
  } catch (e) {
    alert(e);
  }
};




export const registerApi = async (payload) => {
  return await postAPI(register, payload);
}

