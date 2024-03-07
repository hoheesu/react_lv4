import styled from "styled-components";
export const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  & > button {
    background-color: var(--color-green);
  }
`;
export const FormWrap = styled.div`
  & button {
    border: 2px solid var(--color-black);
    &:hover {
      background-color: var(--color-green);
      border: 2px solid transparent;
    }
  }
`;

export const LoginSignupLayout = styled.div`
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const H2 = styled.h2`
  position: absolute;
  top: 3rem;
  width: 30vw;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  box-sizing: content-box;
  font-size: 1rem;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 4px solid var(--color-black);
`;
export const LoginSignupContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 10rem;
  background-color: var(--color-white);
  border: 4px solid var(--color-black);
`;
