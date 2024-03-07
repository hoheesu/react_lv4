import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyle from "./styles/globalStyles";
import ErrorModalPortal from "./portal/ErrorModalPortal";
import Header from "./components/Header";

function App() {
  const errorModal = useSelector((state) => state.errorModal.isError);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      {errorModal ? <ErrorModalPortal /> : null}
    </>
  );
}

export default App;
