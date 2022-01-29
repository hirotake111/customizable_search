import type { NextPage } from "next";
import Link from "next/link";
import { FormEventHandler, useCallback, useRef } from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import { CogIcon } from "@heroicons/react/outline";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchForm from "../components/searchForm";
import { useModal } from "../hooks/modal";

const Home: NextPage = () => {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const { modalEnabled, enableModal } = useModal();

  const pushSearchString = useCallback(() => {
    if (input.current?.value && input.current.value.length >= 1) {
      router.push(`search?q=${input.current.value}`);
      return;
    }
  }, [input, router]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    pushSearchString();
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      {/** modal */}
      <div
        className="absolute z-10 transition-all"
        style={{ visibility: modalEnabled ? "visible" : "hidden" }}
      >
        <div className="flex justify-center items-center w-screen h-screen bg-slate-400 bg-opacity-50">
          <div
            aria-label="modal"
            className="flex flex-col w-3/4 h-3/4 rounded-xl bg-white p-5"
          >
            <span className="text-lg">Settings</span>
            <span>Still in development (sorry!)</span>
            <input type="checkbox" className="default:ring-2 ..." />
          </div>
        </div>
      </div>
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
          <SearchForm inputRef={input} onSubmit={handleSubmit} />
          <div className="mt-7">
            <div className="flex justify-center">
              <button className="custom-btn mr-5" onClick={pushSearchString}>
                GoGoLetsSearch
              </button>
              <button className="custom-btn">I&apos;m Feeling Lucky</button>
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
      <Footer />
    </div>
  );
};

export default Home;
