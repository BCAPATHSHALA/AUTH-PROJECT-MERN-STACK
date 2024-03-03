import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // loading: false,
  // message: null,
  // error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    changePasswordRequest: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    forgetPasswordRequest: (state) => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFail,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFail,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFail,
  clearError,
  clearMessage,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
