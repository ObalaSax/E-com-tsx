import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./myApi";

export const myStore = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
  },
});
export type myRootState = ReturnType<typeof myStore.getState>;
export type myAppDispatch = typeof myStore.dispatch;
