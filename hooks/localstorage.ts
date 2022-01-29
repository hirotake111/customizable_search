import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = JSON.parse(window.localStorage.getItem(key) || "{}");
    if (stored === {} || !stored.value) {
      // nothing is stored in local storage -> use initial value
      return;
    }
    // value is stored in local storage -> update value
    // console.log("current value:", value);
    // console.log(`will update value for ${key}:`, stored.value);
    setValue(stored.value);
  }, []);

  const set = (newValue: T) => {
    setValue(newValue);
    // store it to local storage
    window.localStorage.setItem(key, JSON.stringify({ value: newValue }));
  };

  return { value, set };
};
