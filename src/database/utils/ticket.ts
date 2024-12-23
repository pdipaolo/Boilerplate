import { realmConfig } from '..';
import { Ticket } from '../schemas';

export const addTicket = async (ticket: Ticket) => {
  const realm = new Realm(realmConfig);
  const obj: Ticket | null = realm.objectForPrimaryKey('Ticket', ticket.id);
  obj
    ? realm.write(() => {
        obj.winningsTotal = ticket.winningsTotal;
        obj.statusCode = ticket.statusCode;
        obj.toBeDiscoverd = false;
      })
    : realm.write(() => {
        realm.create('Ticket', { ...ticket });
      });
};

export const deleteTicket = async (ticket: Ticket, realm: Realm) => {
  const obj = realm.objectForPrimaryKey('Ticket', ticket.id);
  obj &&
    realm.write(() => {
      realm.delete(obj);
    });
};
