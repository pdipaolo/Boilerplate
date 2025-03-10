import { createRealmContext } from '@realm/react';

//SCHEMAS
import { Borgoai } from './schemas';
import { firebase } from '@react-native-firebase/database';

export const DB = firebase.app().database('https://borgoai-react-native-c91b4-default-rtdb.europe-west1.firebasedatabase.app/');
// Create a configuration object
export const realmConfig: Realm.Configuration = {
  schema: [Borgoai],
  schemaVersion: 1,
};

// Create a realm context
export const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);
