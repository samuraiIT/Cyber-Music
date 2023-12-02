import {
  TypedUseSelectorHook,
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector
} from "react-redux";
import { configureStore as configureReduxStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import auth from "./auth/auth.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose; //eslint-disable-line
  }
}

const store = configureReduxStore({
  reducer: {
    auth
  }
});

export default store;

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useDispatch = () => useReactReduxDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<State> = useReactReduxSelector;
