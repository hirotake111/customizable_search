import { MouseEventHandler, RefObject } from "react";

interface Props {
  modalEnabled: boolean;
  darkMode: boolean;
  refProp: RefObject<HTMLDivElement>;
  onClick: MouseEventHandler;
}
export default function SettingModal({
  modalEnabled,
  darkMode,
  refProp,
  onClick,
}: Props) {
  return (
    <div
      className="absolute z-10 transition-all"
      style={{ visibility: modalEnabled ? "visible" : "hidden" }}
    >
      <div
        aria-label="modal backbround"
        className="flex justify-center items-center w-screen h-screen bg-slate-400 bg-opacity-50"
      >
        <div
          ref={refProp}
          aria-label="modal"
          className="flex flex-col w-3/4 h-3/4 rounded-xl bg-white p-5"
        >
          <span className="text-lg">Settings</span>
          <span>Still in development (sorry!)</span>
          <div className="flex items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={onClick}>
              <label htmlFor="dark mode" className="mr-4 cursor-pointer">
                Enable dark mode
              </label>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={darkMode}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
