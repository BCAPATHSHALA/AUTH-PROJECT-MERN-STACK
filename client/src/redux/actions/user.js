import { server } from "../store";
import axios from "axios";
import {
  loginSuccess,
  loginRequest,
  loginFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  registerRequest,
  registerSuccess,
  registerFail,
} from "../reducers/userReducer";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());

      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginFail(error.response.data.message));
    }
  };
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(
      `${server}/me`,

      {
        withCredentials: true,
      }
    );
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch(logoutSuccess(data.message));
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};

export const register = (formdata) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    });

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};
