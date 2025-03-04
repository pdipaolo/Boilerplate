import auth from '@react-native-firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { UserType } from '../CreateAccount/types';
import { DB } from '../../database';
import { presentError } from '../../components/ErrorBoundary/slices';

const thunkLogin = createAsyncThunk(
  'login/thunkLogin',
  async (data: { email: string, password: string }, { dispatch }) => {
    const { email, password } = data;
    auth().signInWithEmailAndPassword(email, password).catch((error) => {
      dispatch(presentError(error.code));
      return;
    });
  },
);

const thunkCreateAccount = createAsyncThunk(
  'login/thunkCreateAccount',
  async ({ user, navigation }: { user: UserType, navigation: any }, { dispatch }) => {
    const {
      email,
      password,
      name,
      lastname,
      city,
      address
    } = user;
    auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        DB.ref(`users/${user.user.uid}`).set({
          name,
          lastname,
          email,
          city,
          address,
          createdAt: new Date().toISOString()
        }).then(() => {
          Alert.alert('Success', 'Account created');
          navigation.popToTop();
          return true;
        })
          .catch((error) => {
            dispatch(presentError(error.code));
            return false;
          });
      })
      .catch((error) => {
        dispatch(presentError(error.code));
        return false;
      })
  },
);

export { thunkLogin, thunkCreateAccount }