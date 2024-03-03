import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
  forgetPasswordFail,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  updateProfileFail,
  updateProfileRequest,
  updateProfileSuccess,
} from "../reducers/profileReducer";
import { server } from "../store";
import axios from "axios";

export const updateProfile = (name, email) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());

    const { data } = await axios.put(
      `${server}/updateprofile`,
      { name, email },
      {
        headers: {
          "Content-type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch(updateProfileSuccess(data.message));
  } catch (error) {
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch(changePasswordRequest());

      const { data } = await axios.put(
        `${server}/changepassword`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch(changePasswordSuccess(data.message));
    } catch (error) {
      dispatch(changePasswordFail(error.response.data.message));
    }
  };

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgetPasswordRequest());

    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/forgetpassword`,
      {
        email,
      },
      config
    );

    dispatch(forgetPasswordSuccess(data.message));
  } catch (error) {
    dispatch(forgetPasswordFail(error.response.data.message));
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/resetpassword/${token}`,
      {
        password,
      },
      config
    );

    dispatch(resetPasswordSuccess(data.message));
  } catch (error) {
    dispatch(resetPasswordFail(error.response.data.message));
  }
};
