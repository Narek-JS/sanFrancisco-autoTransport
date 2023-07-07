
import { configureStore } from '@reduxjs/toolkit';
import { manuApi } from './manu'
import { searchApi } from './search'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { quoteFormSlice } from './quoteForm';
import { siteBarSlice } from './siteBar';
import { bannerSlice } from './banner';
import { blogsApi } from './blogs';
import { dynamicDataApi } from './dynamicData';
import { latestNewsApi } from './latestNews';
import { latestBlogsApi } from './latestBlogs';
import { newsApi } from './news';

export const store = configureStore({
  reducer: {
    [manuApi.reducerPath]: manuApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [dynamicDataApi.reducerPath]: dynamicDataApi.reducer,
    [latestNewsApi.reducerPath]: latestNewsApi.reducer,
    [latestBlogsApi.reducerPath]: latestBlogsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    quoteForm: quoteFormSlice.reducer,
    siteBar: siteBarSlice.reducer,
    banner: bannerSlice.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    manuApi.middleware,
    searchApi.middleware,
    blogsApi.middleware,
    dynamicDataApi.middleware,
    latestNewsApi.middleware,
    latestBlogsApi.middleware,
    newsApi.middleware,
  ]),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;