import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { utilityRetriveConfiguration } from '../utils/firebase';

const thunkFetchConfiguration = createAsyncThunk(
  'app/thunkFetchConfiguration',
  async () => {
    try {
      const config = await utilityRetriveConfiguration();
      return config;
    } catch (error) {
      return null;
    }
  },
);

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getData: builder.mutation({
      query: (url :string) => url,
    }),
  }),
});

export { thunkFetchConfiguration };
export const { useGetDataMutation } = api;