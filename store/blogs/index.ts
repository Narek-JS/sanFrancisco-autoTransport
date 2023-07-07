import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/constants/api'

export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBlogs: builder.query<any, string>({
      query: routeName => `category?slug=blogs&page=${routeName}`,
      transformResponse: (response: any) =>  {
        return new Promise<any>(resolve => resolve(response));
      },
    }),
  }),
});

export const selectMenus = blogsApi.endpoints.getBlogs.select('blogs');

export const { useGetBlogsQuery } = blogsApi;
