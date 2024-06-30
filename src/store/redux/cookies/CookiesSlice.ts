import { createSlice } from "@reduxjs/toolkit";

const convertToString = () => {
  if (localStorage.getItem('enableYouTubeVideo') === 'true') {
    return true;
  }
  if (localStorage.getItem('enableYouTubeVideo') === null) {
    return false;
  }
};

const initialState = {
  rejectCookies: false,
  enableYouTubeVideo: convertToString(),
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
