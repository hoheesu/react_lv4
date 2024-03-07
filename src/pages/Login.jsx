import React from "react";
import LoginForm from "../components/common/LoginForm";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../axios/api";
import { LoginSignupLayout, H2, LoginSignupContainer } from "../styles/LoginFormStyleModule";
import withAuth from "../HOC/withAuth";

function Login() {
  const navigate = useNavigate();

  const handleGotoSignup = () => {
    navigate("/signup");
  };

  return (
    <LoginSignupLayout>
      <H2>로그인 페이지</H2>
      <LoginSignupContainer>
        <LoginForm handleUserApi={requestLogin} handleGotoPage={handleGotoSignup}>
          로그인
        </LoginForm>
      </LoginSignupContainer>
    </LoginSignupLayout>
  );
}

export default withAuth(Login, true);
