import { Realm } from '@realm/react';

class Boilerplate extends Realm.Object {
  _id!: string;

  static schema = {
    name: 'Boilerplate',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
    },
  };
}

export { Boilerplate };
