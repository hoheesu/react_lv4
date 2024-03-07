import React from "react";
import LoginForm from "../components/common/LoginForm";
import { useNavigate } from "react-router-dom";
import { requestSignUp } from "../axios/api";
import { LoginSignupLayout, H2, LoginSignupContainer } from "../styles/LoginFormStyleModule";

function Signup() {
  const navigate = useNavigate();
  const handleGotoLogin = () => {
    navigate("/login");
  };

  return (
    <LoginSignupLayout>
      <H2>회원가입 페이지</H2>
      <LoginSignupContainer>
        <LoginForm handleUserApi={requestSignUp} handleGotoPage={handleGotoLogin}>
          회원가입
        </LoginForm>
      </LoginSignupContainer>
    </LoginSignupLayout>
  );
}

export default Signup;
