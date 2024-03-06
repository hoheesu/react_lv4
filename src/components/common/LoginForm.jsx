import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import ButtonForm from "./ButtonForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputValueTrim } from "../../util/inputValueTrim";

function LoginForm({ children, handleUserApi }) {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        inputValueTrim(inputValue.id) && inputValueTrim(inputValue.password)
          ? handleUserApi(inputValue, navigate, dispatch)
          : alert("id와 비밀번호 모두 입력해주세요");
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
    </form>
  );
}

export default LoginForm;
