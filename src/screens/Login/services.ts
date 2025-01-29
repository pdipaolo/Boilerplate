import auth from '@react-native-firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const thunkLogin = createAsyncThunk(
  'login/thunkLogin',
  async (data: { email: string, password: string }, { }) => {
    const { email, password } = data;
    auth().signInWithEmailAndPassword(email, password).catch((error) => {
      Alert.alert('Error', error.message);
      return;
    });
  },
);

const thunkCreateAccount = createAsyncThunk(
  'login/thunkCreateAccount',
  async (data: { email: string, password: string }, { }) => {
    // const { email, password } = data;
    // auth().signInWithEmailAndPassword(email, password).catch((error) => {
    //   Alert.alert('Error', error.message);
    //   return;
    // });
  },
);

export { thunkLogin, thunkCreateAccount }