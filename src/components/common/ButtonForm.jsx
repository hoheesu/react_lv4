import React from "react";
import styled from "styled-components";

function ButtonForm({ children, onClickFnc, type }) {
  return (
    <ButtonStyle
      type={type}
      onClick={
        onClickFnc
          ? () => {
              onClickFnc();
            }
          : null
      }>
      {children}
    </ButtonStyle>
  );
}
const ButtonStyle = styled.button`
  width: 100%;
  background-color: var(--color-white);
`;
export default ButtonForm;
