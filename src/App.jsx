import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { errorHandle } from "./redux/modules/errorModalSlice";
import ErrorModalPortal from "./portal/ErrorModalPortal";
import { useEffect } from "react";

function App() {
  const errorModal = useSelector((state) => state.errorModal.isError);
  return (
    <>
      <Outlet />
      {errorModal ? <ErrorModalPortal /> : null}
    </>
  );
}

export default App;
