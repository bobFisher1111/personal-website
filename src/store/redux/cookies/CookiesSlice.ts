import { createSlice } from "@reduxjs/toolkit";

const getEnableYouTubeVideoFromStorage = (): boolean =>
  localStorage.getItem("enableYouTubeVideo") === "true";

const initialState = {
  rejectCookies: false,
  enableYouTubeVideo: getEnableYouTubeVideoFromStorage(),
};

export const CookiesSlice = createSlice({
  name: "rejectCookie",
  initialState,
  reducers: {
    cookiesOff: (state) => {
      state.rejectCookies = !state.rejectCookies;
      state.enableYouTubeVideo = !state.enableYouTubeVideo;
    },
  },
});

export const { cookiesOff } = CookiesSlice.actions;

export default CookiesSlice.reducer;
