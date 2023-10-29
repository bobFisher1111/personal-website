import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWebsiteData } from '../../../services/getdata-services';

export const GetWebsiteData = createAsyncThunk('websiteData/getData', async (arg, {
  rejectWithValue,
}) => {
  try {
    const data = await getWebsiteData();
    return data;
  } catch (error: any) {
    rejectWithValue(error.response.data);
  }
});

export default GetWebsiteData;