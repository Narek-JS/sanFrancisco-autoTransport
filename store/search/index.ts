import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/constants/api'
import { getSearchAdaptedData } from '@/helper/search';

export interface ISearchData {
    empty: boolean;
    pages: Array<any>;
    postByCategory: Array<any>;
    posts: Array<any>;
}

interface ISearchDataExam {
    action?: boolean;
    message?: string;
    data: ISearchData
};

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSearchData: builder.mutation<ISearchData, { page: number; text: string }>({
      query: body => ({
        url: `search`,
        method: 'POST',
        body,
      }),
      transformResponse: (response: ISearchDataExam, _, { text }) =>  {
        return new Promise<ISearchData>(resolve => resolve(getSearchAdaptedData(response, text)));
      },
    }),
  }),
});

export const selectMenus = searchApi.endpoints.getSearchData.select('search');

export const { useGetSearchDataMutation } = searchApi;
