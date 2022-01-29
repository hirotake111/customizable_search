import type { NextPage } from "next";
import Link from "next/link";
import { FormEventHandler, useCallback, useRef } from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import { CogIcon } from "@heroicons/react/outline";

import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import { useModal } from "../hooks/modal";
import SettingModal from "../components/SettingModal";
import { useSettings } from "../hooks/settings";

const Home: NextPage = () => {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const { modalEnabled, enableModal, modalRef } = useModal();
  const { settings, updateSettings } = useSettings();

  const pushSearchString = useCallback(() => {
    if (input.current?.value && input.current.value.length >= 1) {
      router.push(`search?q=${input.current.value}`);
    }
  }, [input, router]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    pushSearchString();
  };

  return (
    <div
      aria-label="background color"
      className={["transition", settings.darkMode ? "bg-slate-800" : ""].join(
        " "
      )}
    >
      <div className="flex flex-col h-screen justify-between">
        <SettingModal
          modalEnabled={modalEnabled}
          refProp={modalRef}
          settings={settings}
          onUpdateSettings={updateSettings}
        />
        <header className="w-screen h-16 flex justify-end text-s pr-5">
          {/* <Header /> */}
          <CogIcon
            className="w-8 fill-emerald-300 text-blue-400 cursor-pointer"
            onClick={enableModal}
          />
        </header>
        <main className="flex flex-col items-center h-full">
          <div className="flex flex-col justify-end h-full max-h-64">
            <Logo />
          </div>
          <div className="m-5 w-full max-w-[90%] sm:max-w-[584px]">
            <SearchForm
              inputRef={input}
              onSubmit={handleSubmit}
              darkMode={settings.darkMode}
            />
            <div className="mt-7">
              <div className="flex justify-center">
                <button
                  className={`custom-btn mr-5 ${
                    settings.darkMode && "custom-btn_dark"
                  }`}
                  onClick={pushSearchString}
                >
                  GoGoLetsSearch
                </button>
                <button
                  className={`custom-btn ${
                    settings.darkMode && "custom-btn_dark"
                  }`}
                >
                  I&apos;m Feeling Lucky
                </button>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-600">
            Offered in:{" "}
            <Link href="/" passHref>
              <a>
                <span className="text-blue-700 hover:underline">日本語</span>
              </a>
            </Link>
          </div>
        </main>
        <Footer darkMode={settings.darkMode} />
      </div>{" "}
    </div>
  );
};

export default Home;
