import { BASE_URL } from "@/constants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dynamicDataApi = createApi({
    reducerPath: 'dynamicDataApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getDynamicData: build.query<any, string>({
            query: slug => `getDynamicData/${slug}`,
            transformResponse: (response: any) => {
                return new Promise<any>(resolve => resolve(response));
            }
        })
    })
});

export const { useGetDynamicDataQuery } = dynamicDataApi;