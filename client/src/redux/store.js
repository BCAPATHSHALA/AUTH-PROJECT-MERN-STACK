import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { profileReducer } from "./reducers/profileReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";
