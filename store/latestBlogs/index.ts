import { BASE_URL } from "@/constants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const latestBlogsApi = createApi({
    reducerPath: "latestBlogsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getLatestBlogs: build.query<any, number>({
            query: limit => `getLast2Data?category=2&limit=${limit}`,
            transformResponse: (response: any) => {
                return new Promise<any>(resolve => resolve(response));
            }
        })
    })
});

export const { useGetLatestBlogsQuery } = latestBlogsApi;