import { createApi, fetchbasequery } from "@reduxjs/toolkit";
export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchbasequery({ basUrl: "http://localhost:5000/api/" }),
  endpoinst: (builder) => ({}),
});
