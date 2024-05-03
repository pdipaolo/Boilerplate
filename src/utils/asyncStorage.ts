import AsyncStorage from '@react-native-async-storage/async-storage';


const ASYNC_STORAGE_KEY = {
  ITEM_TEST: 'item_test',
};

async function utilityAsyncStorageSetItem(
  key: string,
  value: string | number | boolean | unknown[] | Record<string, unknown>,
): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('[utilityAsyncStorageSetItem] error:', error);
  }
}

async function utilityAsyncStorageGetItem(
  key: string,
): Promise<string | boolean | null | Record<string, unknown>> {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('[utilityAsyncStorageGetItem] error:', error);
    return null;
  }
}

async function utilityAsyncStorageRemoveItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('[utilityAsyncStorageRemoveItem] error:', error);
  }
}

async function utilityAsyncStorageClear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('[utilityAsyncStorageClear] error:', error);
  }
}

export {
  ASYNC_STORAGE_KEY,
  utilityAsyncStorageSetItem,
  utilityAsyncStorageGetItem,
  utilityAsyncStorageRemoveItem,
  utilityAsyncStorageClear,
};
