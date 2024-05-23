import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import WebSiteDataSlice from './webSiteData/WebSiteDataSlice';
import ThemeSlice from './theme/ThemeSlice';

export const store = configureStore({
  reducer: {
    webSiteData: WebSiteDataSlice.reducer,
    theme: ThemeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
