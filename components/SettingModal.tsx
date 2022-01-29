import { MouseEventHandler, RefObject } from "react";
import { Settings } from "../hooks/settings";

interface Props {
  modalEnabled: boolean;
  settings: Settings;
  refProp: RefObject<HTMLDivElement>;
  onUpdateSettings: (settings: Settings) => void;
}
export default function SettingModal({
  modalEnabled,
  settings,
  refProp,
  onUpdateSettings,
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
          <span className="text-lg mb-3">Settings</span>
          <div className="flex items-center h-10">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                onUpdateSettings({ ...settings, darkMode: !settings.darkMode })
              }
            >
              <label htmlFor="dark mode" className="mr-4 cursor-pointer">
                Enable dark mode
              </label>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={settings.darkMode}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="flex items-center h-10">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                onUpdateSettings({ ...settings, newTab: !settings.newTab })
              }
            >
              <label htmlFor="dark mode" className="mr-4 cursor-pointer">
                Open link with a new tab
              </label>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={settings.newTab}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
