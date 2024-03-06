import axios from "axios";
import instance from "./axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const requestSignUp = async (userInfo, navigate) => {
  try {
    const res = await instance.post("register", userInfo);
    console.log(res);
    navigate("/login");
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const requestLogin = async (userInfo, navigate) => {
  try {
    const res = await instance.post("login", userInfo);
    const { token } = res.data;
    console.log(token);
    console.log(res);
    // cookie.set("token", `Bearer ${token}`);
    navigate("/");
    return cookie.set("token", `Bearer ${token}`, {});
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const requestUserCheck = async () => {
  const token = cookie.get("token");
  try {
    const res = await instance.get("user", {
      headers: { authorization: token },
    });
    const { statusText } = res;
    console.log(statusText);
    console.log(res);
    return statusText;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
