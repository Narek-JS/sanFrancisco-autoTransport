import { BASE_URL } from "@/constants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const latestNewsApi = createApi({
    reducerPath: "latestNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getLatestNews: build.query<any, number>({
            query: limit => `getLast2Data?category=1&limit=${limit}`,
            transformResponse: (response: any) => {
                return new Promise<any>(resolve => resolve(response));
            }
        })
    })
});

export const { useGetLatestNewsQuery } = latestNewsApi;