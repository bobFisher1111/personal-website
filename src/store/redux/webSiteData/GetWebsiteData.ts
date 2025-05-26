import { createAsyncThunk } from '@reduxjs/toolkit';
import websiteData from '../../../websiteData/websiteData.json';

export const GetWebsiteData = createAsyncThunk('websiteData/getData', async () => {
  return websiteData;
});

export default GetWebsiteData;