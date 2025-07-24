import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({}),
});
