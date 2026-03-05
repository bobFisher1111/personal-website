import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GetWebsiteData from "./GetWebsiteData";
import websiteData from "src/websiteData/websiteData.json";
import type { WebsiteData } from "src/types/websiteData";

type WebSiteDataState = {
  data: WebsiteData;
  isSuccess: boolean;
  message: string;
  loading: boolean;
};

const typedWebsiteData: WebsiteData = websiteData;

const initialState: WebSiteDataState = {
  data: typedWebsiteData,
  isSuccess: true,
  message: "Data Loaded",
  loading: false,
};

const WebSiteDataSlice = createSlice({
  name: "siteData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetWebsiteData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      GetWebsiteData.fulfilled,
      (state, action: PayloadAction<WebsiteData>) => {
        state.loading = false;
        state.data = action.payload;
        state.isSuccess = true;
      },
    );
    builder.addCase(GetWebsiteData.rejected, (state, action) => {
      state.message = action.error.message ?? "Failed to load data";
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export default WebSiteDataSlice;
