import { useLocalStorage } from "./localstorage";

export const useDarkMode = () => {
  const { value, set } = useLocalStorage("darkmode", false);
  return { darkMode: value, setDarkMode: set };
};
