import React from "react";
import styled from "styled-components";
import ButtonForm from "../components/common/ButtonForm";

const MyModal = ({}) => {
  const btnNum = [];
  for (let i = 1; i <= buttonNum; i++) {
    btnNum.push(i);
  }
  return (
    <>
      <Background onClick={overTab ? handleOverTabClose : () => {}}></Background>
      <ModalMain>
        <p>{children}</p>
        <ButtonBox>
          {btnNum.map((el) => {
            return (
              <ButtonForm
                key={el}
                type="small"
                onClickFnc={el === 1 ? handleCloseModal : handlePlayModal}
                $bo={el === 1 ? "dark-purple" : "yellow"}>
                {el === 1 ? "닫기" : "확인"}
              </ButtonForm>
            );
          })}
        </ButtonBox>
      </ModalMain>
    </>
  );
};

export default MyModal;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: #33333388;
  z-index: 100;
`;

const ModalMain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  padding: 1rem;
  width: 20rem;
  height: 20rem;
  z-index: 101;
  background-color: var(--color-white);
  border: 2px solid var(--color-default);
  color: var(--color-default);
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
