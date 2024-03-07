import React from "react";
import styled from "styled-components";

function InputForm({ type, placeholder, valueState, onChangeFnc }) {
  return (
    <Input
      type={type === "id" ? "text" : "password"}
      placeholder={placeholder}
      value={valueState}
      onChange={(e) => onChangeFnc(type, e.target.value)}
    />
  );
}

const Input = styled.input`
  border: 2px solid var(--color-black);
  transition: all 0.4s;
  &:focus {
    outline: none;
    border: 2px solid var(--color-purple);
  }
`;

export default InputForm;
