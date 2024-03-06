import React from "react";
import LoginForm from "../components/common/LoginForm";
import { Link } from "react-router-dom";
import { requestLogin } from "../axios/api";

function Login() {
  return (
    <>
      <LoginForm handleUserApi={requestLogin}>로그인</LoginForm>
      <Link to="/signup">회원가입</Link>
      <Link to="/">메인페이지</Link>
    </>
  );
}

export default Login;
