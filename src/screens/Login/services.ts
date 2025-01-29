import auth from '@react-native-firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { UserType } from '../CreateAccount/types';
import { DB } from '../../database';
import { tab1Route } from '../Tab1/route';

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
  async ({user, navigation}: {user: UserType, navigation: any}, {  }) => {
    const  { 
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
        navigation.navigate(tab1Route);
        return true;
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
        return false;
      });
    })
    .catch((error) => {
      Alert.alert('Error', error.message);
      return false;
    })
  },
);

export { thunkLogin, thunkCreateAccount }