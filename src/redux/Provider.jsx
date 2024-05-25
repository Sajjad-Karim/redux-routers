import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./roorReducers";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});
const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ReduxProvider;
