import React from "react";
import LoginForm from "../components/common/LoginForm";
import { Link } from "react-router-dom";
import { requestSignUp } from "../axios/api";

function Signup() {
  return (
    <div>
      <LoginForm handleUserApi={requestSignUp}>회원가입</LoginForm>
      <Link to="/login">로그인하러 가기</Link>
      <Link to="/">메인페이지</Link>
    </div>
  );
}

export default Signup;
