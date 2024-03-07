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
    navigate("/");
    const expirationDate = new Date(new Date().getTime() + 1 + 60000); // 현재 시간에 분을 더해 만료 시간 설정
    return cookie.set("token", `Bearer ${token}`, {
      path: "/",
      expires: expirationDate,
    });
  } catch (error) {
    return dispatch(errorHandle(error.response.data.message));
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
    return error.response.data.message;
  }
};
