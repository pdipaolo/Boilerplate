import { realmConfig } from '..';
import { ICON } from '../../components/Icon/constants';
import { Game } from '../../constants/game';
import { Favourites } from '../schemas';

export const addFavourite = async (combinations: any, game: Game) => {
  const realm = new Realm(realmConfig);
  const charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const favouritesId: string = [...Array(5)]
    .map((_) => charset[Math.floor(Math.random() * charset.length)])
    .join('');
  
  const favourites: any = realm.objects('Favourites');
  const favouritesLength = favourites.length;
  const oldNumber = favourites[favouritesLength - 1]?.number ?? 0;
  const obj = realm.objectForPrimaryKey('Favourites', favouritesId);
  obj && realm.write(() => { realm.delete(obj) });
  realm.write(() => {
    realm.create('Favourites', {
      id: favouritesId,
      name: favouritesLength === 0 ? `Preferito ${1}` : `Preferito ${oldNumber + 1}`,
      number: favouritesLength === 0 ? 1 : oldNumber + 1,
      icon: ICON.HEART_ICON,
      combinations: combinations,
      game: game,
    });
  });
};

export const editFavourites = async (
  favourites: Favourites,
  name: string,
  icon: string,
  realm: Realm,
) => {
  const obj = realm.objectForPrimaryKey('Favourites', favourites.id);
  obj &&
    realm.write(() => {
      favourites.name = name;
      favourites.icon = icon;
    });
};

export const deleteFavourites = async (id: string) => {
  const realm = new Realm(realmConfig);
  const obj = realm.objectForPrimaryKey('Favourites', id);
  obj &&
    realm.write(() => {
      realm.delete(obj);
    });
};
