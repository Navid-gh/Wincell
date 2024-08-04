export const getFromStorage = <T>(
  key: string,
  defaultValue?: T,
  storage: Storage = localStorage
) => {
  return storage.getItem(key) || defaultValue;
};

export const setToStorage = (
  key: string,
  value: string,
  storage: Storage = localStorage
) => {
  storage.setItem(key, value);
};

export const removeFromStorage = (
  key: string,
  storage: Storage = localStorage
) => {
  storage.removeItem(key);
};

export const clearStorage = (storage: Storage = localStorage) => {
  storage.clear();
};
