import { Realm } from '@realm/react';

class BorgoAI extends Realm.Object {
  _id!: string;

  static schema = {
    name: 'BorgoAI',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
    },
  };
}

export { BorgoAI };
