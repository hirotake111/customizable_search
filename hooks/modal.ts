import { useState, useCallback, useEffect } from "react";

export const useModal = () => {
  const [modalEnabled, setModalEnabled] = useState(false);

  const callback = useCallback(() => setModalEnabled(false), [setModalEnabled]);

  const addListener = () => {
    document.addEventListener("click", callback);
  };

  const removeListener = () => {
    document.removeEventListener("click", callback);
  };

  const enableModal = () => {
    setModalEnabled(true);
  };

  useEffect(() => {
    if (modalEnabled) {
      // register callback
      addListener();
    } else {
      // remove callback
      removeListener();
    }
  }, [modalEnabled]);

  return { modalEnabled, enableModal };
};
