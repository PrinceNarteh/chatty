import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotification: (state, { payload }) => {},
    resetNotification: (state, { payload }) => {},
  },

  extraReducers: (builder) => {
    //save user after register
    builder.addMatcher(
      appApi.endpoints.register.matchFulfilled,
      (_, { payload }) => payload
    );

    // save user after login
    builder.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (_, { payload }) => payload
    );

    // destroy user session
    builder.addMatcher(appApi.endpoints.logout.matchFulfilled, () => null);
  },
});

export const { addNotification, resetNotification } = userSlice.actions;
export default userSlice.reducer;
