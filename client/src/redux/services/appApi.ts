import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FormValues, User } from "../../types";

const appApi = createApi({
  reducerPath: "apiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<any, FormValues>({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation<any, { email: string; password: string }>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    logout: builder.mutation({
      query: (payload) => ({
        url: "/auth/logout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  appApi;

export default appApi;
