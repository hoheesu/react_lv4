import axios from "axios";
import instance from "./axios";
import { Cookies } from "react-cookie";
import { errorHandle } from "../redux/modules/errorModalSlice";

const cookie = new Cookies();

export const requestSignUp = async (userInfo, navigate, dispatch) => {
  try {
    const res = await instance.post("register", userInfo);
    navigate("/login");
  } catch (error) {
    dispatch(errorHandle(error.response.data.message));
    console.log(error.response.data.message);
  }
};

export const requestLogin = async (userInfo, navigate, dispatch) => {
  try {
    const res = await instance.post("login", userInfo);
    const { token } = res.data;
    // cookie.set("token", `Bearer ${token}`);
    navigate("/");
    return cookie.set("token", `Bearer ${token}`, {});
  } catch (error) {
    dispatch(errorHandle(error.response.data.message));
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
    return statusText;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};
