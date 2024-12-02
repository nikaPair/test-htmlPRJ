import { createSlice } from '@reduxjs/toolkit';

interface PageState {
    page: string;
}

const initialState: PageState = { page: 'Новости и статьи' };
export const pageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const { setCurrentPage } = pageSlice.actions;
export const currentPageReducer = pageSlice.reducer;
