import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "redux/store";
import { User } from "utils/types";

export type AuthState = {
  authStatus: "initial" | "loading" | "error" | "resolved";
  isUserLoggedIn: boolean;
  username: string;
  authErrorText: string;
};

const initialState = {
  authStatus: "initial",
  isUserLoggedIn: true,
  username: "",
  authErrorText: ""
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<Required<User>>) => {
      state.isUserLoggedIn = true;
      state.authStatus = "resolved";
      if (action.payload) {
        state.authErrorText = "";
        state.username = action.payload.username;
      }
    },
    logOut: (state) => {
      state.isUserLoggedIn = false;
      state.authStatus = "initial";
    },
    setAuthErrorText: (state, action: PayloadAction<Required<string>>) => {
      if (action.payload) {
        state.authErrorText = action.payload;
      }
    },
    setAuthErrorStatus: (
      state,
      action: PayloadAction<
        Required<"initial" | "loading" | "error" | "resolved">
      >
    ) => {
      state.authStatus = action.payload;
    }
  },
  extraReducers: (_builder) => {}
});

export const authSelector = (state: State) => state.auth;

export default authSlice.reducer;
export const { setAuthErrorText, logOut, logIn, setAuthErrorStatus } =
  authSlice.actions;
