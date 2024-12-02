import { createSlice } from '@reduxjs/toolkit';
import { newsArr } from '../../mocks/mocks';

interface NewsState {
    news: typeof newsArr;
}

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: newsArr,
    } as NewsState,
    reducers: {
        onlyNews: state => {
            state.news = newsArr.filter(item => item.type === 'Новости');
        },
        onlyStatements: state => {
            state.news = newsArr.filter(item => item.type === 'Статья');
        },
        onlyAll: state => {
            state.news = newsArr;
        },
    },
});

export const { onlyNews, onlyStatements, onlyAll } = newsSlice.actions;
export default newsSlice.reducer;
