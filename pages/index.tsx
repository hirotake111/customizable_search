import type { NextPage } from "next";
import Link from "next/link";
import { FormEventHandler, useCallback, useRef } from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/router";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchForm from "../components/searchForm";

const Home: NextPage = () => {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);

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
      <header className="w-screen h-16 flex justify-end text-s">
        <Header />
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
                Google Search
              </button>
              <button className="custom-btn">I&apos;m Feeling Lucky</button>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-600">
          Google offered in:{" "}
          <Link href="/">
            <span className="text-blue-700 hover:underline">日本語</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
