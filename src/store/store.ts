import { configureStore } from '@reduxjs/toolkit';
import { pageSlice } from './CurrentPageSlice/CurrentPageSlice';
import { newsSlice } from './NewsSlice/NewsSlice';
export const store = configureStore({
    reducer: {
        currentPage: pageSlice.reducer,
        news: newsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
