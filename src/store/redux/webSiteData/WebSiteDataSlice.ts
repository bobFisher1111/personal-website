import { createSlice } from '@reduxjs/toolkit';
import GetWebsiteData from './GetWebsiteData';

const WebSiteDataSlice = createSlice({
  name: 'siteData',
  initialState: {
    data: [],
    isSuccess: false,
    message: 'No Data Yet',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetWebsiteData.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(GetWebsiteData.fulfilled, (state: any, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    });
    builder.addCase(GetWebsiteData.rejected, (state: any, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    });
  }
});

export default WebSiteDataSlice;