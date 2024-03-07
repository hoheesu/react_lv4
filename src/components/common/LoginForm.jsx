import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputValueTrim } from "../../util/inputValueTrim";
import styled from "styled-components";
import InputForm from "./InputForm";
import ButtonForm from "./ButtonForm";
import { FormWrap, FormStyle } from "../../styles/LoginFormStyleModule";
import { errorHandle } from "../../redux/modules/errorModalSlice";

function LoginForm({ children, handleUserApi, handleGotoPage }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });

  const setState = (newKey, newValue) => {
    setInputValue((prevState) => {
      const newState = { ...prevState, [newKey]: newValue };
      return newState;
    });
  };

  return (
    <FormWrap>
      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          inputValueTrim(inputValue.id) && inputValueTrim(inputValue.password)
            ? handleUserApi(inputValue, navigate, dispatch)
            : dispatch(errorHandle("id와 비밀번호 모두 입력해주세요"));

          setInputValue({
            id: "",
            password: "",
          });
        }}>
        <InputForm
          type="id"
          placeholder="ID를 입력하세요"
          valueState={inputValue.id}
          onChangeFnc={setState}
        />
        <InputForm
          type="password"
          placeholder="비밀번호를 입력하세요"
          valueState={inputValue.password}
          onChangeFnc={setState}
        />
        <ButtonForm type="submit">{children}</ButtonForm>
      </FormStyle>
      <ButtonForm onClickFnc={handleGotoPage}>
        {children === "로그인" ? "회원가입 하고오기" : "로그인 하러가기"}
      </ButtonForm>
    </FormWrap>
  );
}

export default LoginForm;
