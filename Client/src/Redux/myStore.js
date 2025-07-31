import { configureStore } from "@reduxjs/toolkit";
import { users } from "./Slices/UserReducer";
import { myApi } from "./myAPI";
export const myStore = configureStore({
  reducer: {
    api: myApi.reducer,
    users: users.reducer,
  },
});
