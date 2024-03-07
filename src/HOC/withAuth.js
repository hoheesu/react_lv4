import React, { useEffect, useState } from "react";
import { errorHandle, errorCloseBtn } from "../redux/modules/errorModalSlice";
import { useDispatch } from "react-redux";
import { requestUserCheck } from "../axios/api";

const withAuth = (WrappedComponent, option) => {
  const AuthComponent = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        const result = await requestUserCheck();
        if (result !== "OK" && !option) {
          dispatch(errorHandle("로그인이 필요합니다."));
          dispatch(errorCloseBtn("/login"));
        }
        if (result === "OK" && option) {
          dispatch(errorHandle("로그인을 이미 한 유저입니다."));
          dispatch(errorCloseBtn("/"));
        }
      })();
    }, []);
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
