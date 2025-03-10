import { createRealmContext } from '@realm/react';

//SCHEMAS
import { BorgoAI } from './schemas';
import { firebase } from '@react-native-firebase/database';

export const DB = firebase.app().database('https://borgoAI-react-native-c91b4-default-rtdb.europe-west1.firebasedatabase.app/');
// Create a configuration object
export const realmConfig: Realm.Configuration = {
  schema: [BorgoAI],
  schemaVersion: 1,
};

// Create a realm context
export const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);
