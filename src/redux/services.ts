import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { utilityRetriveConfiguration } from '../utils/firebase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { DB } from '../database';

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

const thunkUpdateUser = createAsyncThunk(
  'app/thunkUpdateUser',
  async (user: FirebaseAuthTypes.User | null) => {
    try {
      if (user === null) {
        return null
      }
      const reference = DB.ref(`users/${user.uid}`);
      const data = (await reference.once('value')).val();
      const { email, displayName, name,lastname, city, address } = data;
      return {
        email: email,
        displayname: displayName,
        name: name,
        lastname: lastname,
        city: city,
        address: address,
        uid: user.uid,
      };
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
      query: (url: string) => url,
    }),
  }),
});

export { thunkFetchConfiguration, thunkUpdateUser };
export const { useGetDataMutation } = api;