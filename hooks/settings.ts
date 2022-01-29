import { useLocalStorage } from "./localstorage";

export interface Settings {
  darkMode: boolean;
  newTab: boolean;
}

export const useSettings = () => {
  const { value, set } = useLocalStorage<Settings>("settings", {
    darkMode: false,
    newTab: true,
  });

  return { settings: value, updateSettings: set };
};
