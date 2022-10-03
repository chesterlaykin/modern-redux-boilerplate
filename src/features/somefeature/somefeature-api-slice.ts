import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SOMEFEATURE_API_KEY = 'xxxxxxxxxxxxxxxxx';

interface SomeFeatureCategory {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://some-api.com',
    prepareHeaders(headers) {
      headers.set('x-api-key', SOMEFEATURE_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchSomeFeatureCategory: builder.query<SomeFeatureCategory[], number | void>({
        query(limit = 10) {
          return `/somefeaturecategory?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchSomeFeatureCategoryQuery } = apiSlice;
