import { useState, useCallback, useEffect, useRef } from "react";

export const useModal = () => {
  const [modalEnabled, setModalEnabled] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (e: MouseEvent) => {
      const node = e.target as Node;
      if (!node) return;
      if (modalRef.current?.contains(node)) {
        // clicked inside of modal
        return;
      }
      // clicked outside of modal, then disable modal
      setModalEnabled(false);
    },
    [setModalEnabled]
  );

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

  return { modalEnabled, enableModal, modalRef };
};
