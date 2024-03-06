import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestUserCheck } from "../axios/api";
import { Cookies } from "react-cookie";

function Main() {
  // const [isLoading, setIsLoading] = useState(false);
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [isToken, setIsToken] = useState();

  const handleLogout = () => {
    cookie.remove("token");
    setIsToken(null);
    requestUserCheck();
  };

  useEffect(() => {
    (async () => {
      const result = await requestUserCheck();
      setIsToken(result);
    })();
  }, []);

  return (
    <div>
      {isToken === "OK" ? (
        <button
          onClick={() => {
            handleLogout();
            navigate("/login");
          }}>
          로그아웃
        </button>
      ) : (
        <Link to="/login">로그인하러 가기</Link>
      )}
    </div>
  );
}

export default Main;
