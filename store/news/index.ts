import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/constants/api'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<any, string>({
      query: routeName => `category?slug=news&page=${routeName}`,
      transformResponse: (response: any) =>  {
        return new Promise<any>(resolve => resolve(response));
      },
    }),
  }),
});

export const selectMenus = newsApi.endpoints.getNews.select('news');

export const { useGetNewsQuery } = newsApi;
