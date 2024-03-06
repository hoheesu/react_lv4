import React from "react";

function InputForm({ type, placeholder, valueState, onChangeFnc }) {
  return (
    <input
      type={type === "id" ? "text" : "password"}
      placeholder={placeholder}
      value={valueState}
      onChange={(e) => onChangeFnc(type, e.target.value)}
    />
  );
}

export default InputForm;
