import React from "react";
import styled from "styled-components";
import ButtonForm from "../components/common/ButtonForm";
import { useDispatch, useSelector } from "react-redux";
import { errorHandle } from "../redux/modules/errorModalSlice";

const ErrorModalPortal = ({ children }) => {
  const errorModalText = useSelector((state) => state.errorModal.errorText);
  const errorHandleFnc = useSelector((state) => state.errorModal.btnHandleFnc);

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    if (errorHandleFnc) {
      errorHandleFnc(); // 필요한 데이터로 함수 대신 함수를 직접 호출합니다.
    }
    dispatch(errorHandle(""));
  };
  return (
    <>
      <Background onClick={handleCloseModal}></Background>
      <ModalMain>
        <p>{errorModalText}</p>
        <ButtonBox>
          <ButtonForm onClickFnc={handleCloseModal}>확인</ButtonForm>
        </ButtonBox>
      </ModalMain>
    </>
  );
};

export default ErrorModalPortal;

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
  height: 10rem;
  z-index: 101;
  background-color: #fff;
  border: 2px solid #333;
  color: #333;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
