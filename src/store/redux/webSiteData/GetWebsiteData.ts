import { createAsyncThunk } from "@reduxjs/toolkit";
import websiteData from "src/websiteData/websiteData.json";
import type { WebsiteData } from "src/types/websiteData";

export const GetWebsiteData = createAsyncThunk(
  "websiteData/getData",
  async (): Promise<WebsiteData> => websiteData,
);

export default GetWebsiteData;
