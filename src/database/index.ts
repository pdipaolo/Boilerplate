import { createRealmContext } from '@realm/react';

//SCHEMAS
import { Boilerplate } from './schemas';

// Create a configuration object
export const realmConfig: Realm.Configuration = {
  schema: [Boilerplate],
  schemaVersion: 1,
};

// Create a realm context
export const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);
