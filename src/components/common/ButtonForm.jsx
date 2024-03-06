import React from "react";

function ButtonForm({ children, onClickFnc, type }) {
  return (
    <button
      type={type}
      onClick={
        onClickFnc
          ? () => {
              onClickFnc();
            }
          : null
      }>
      {children}
    </button>
  );
}

export default ButtonForm;
