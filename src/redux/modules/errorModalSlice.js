import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  errorText: "",
  btnHandleFnc: "",
};

export const errorModalSlice = createSlice({
  name: "errorModal",
  initialState,
  reducers: {
    errorHandle: (state, action) => {
      state.isError = !state.isError;
      state.errorText = action.payload;
    },
    errorCloseBtn: (state, action) => {
      state.btnHandleFnc = action.payload;
    },
  },
});

export const { errorHandle, errorCloseBtn } = errorModalSlice.actions;
export default errorModalSlice.reducer;
