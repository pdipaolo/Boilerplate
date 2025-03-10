import { Realm } from '@realm/react';

class Borgoai extends Realm.Object {
  _id!: string;

  static schema = {
    name: 'Borgoai',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
    },
  };
}

export { Borgoai };
