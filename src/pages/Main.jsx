// Main.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { errorHandle, errorCloseBtn } from "../redux/modules/errorModalSlice";
import { requestUserCheck } from "../axios/api";

function Main() {
  const [isToken, setIsToken] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const token = cookie.get("token"); // 쿠키에서 토큰을 가져옵니다.

  useEffect(() => {
    (async () => {
      const result = await requestUserCheck();
      if (result !== "OK") {
        dispatch(errorHandle("로그인이 필요합니다.")); // 에러 모달을 띄웁니다.
        dispatch(errorCloseBtn(navigate("/login")));
      }
      setIsToken(result);
    })();
  }, []);

  const handleLogout = () => {
    cookie.remove("token");
    navigate("/login");
  };

  return (
    <div>
      {isToken === "OK" ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <Link to="/login">로그인하러 가기</Link>
      )}
    </div>
  );
}

export default Main;
