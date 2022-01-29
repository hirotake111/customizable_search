import { FormEventHandler, useEffect, useRef } from "react";
import {
  BookOpenIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { CogIcon } from "@heroicons/react/outline";

import type { NextPage } from "next";
import Link from "next/link";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";
import { getSearchResults } from "../utils/api";
import SearchInfo from "../components/SearchInfo";
import SearchedItem from "../components/SearchedItem";
import { useDarkMode } from "../hooks/darkmode";
import SettingModal from "../components/SettingModal";
import { useModal } from "../hooks/modal";

const Search: NextPage = () => {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const { query } = router;
  const { data, isLoading, error } = useQuery(["search", query], () => {
    if (typeof query.q === "string" && query.q.length > 0) {
      return getSearchResults(query.q);
    }
  });
  const { darkMode, setDarkMode } = useDarkMode();
  const { modalEnabled, modalRef, enableModal } = useModal();

  useEffect(() => {
    if (input.current && typeof query.q === "string") {
      input.current.value = query.q;
      return;
    }
  }, [input, query]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("submit");
    if (input.current?.value && input.current.value.length >= 1) {
      router.push(`search?q=${input.current.value}`);
      return;
    }
  };

  return (
    <div
      aria-label="background color"
      className={["transition", darkMode ? "bg-slate-800" : ""].join(" ")}
    >
      <SettingModal
        modalEnabled={modalEnabled}
        refProp={modalRef}
        darkMode={darkMode}
        onClick={() => setDarkMode(!darkMode)}
      />
      <div className="flex flex-col">
        <header className="flex justify-between flex-col sm:flex-row items-center pt-7 px-6 pb-2">
          <div
            aria-label="left"
            className="flex flex-col items-center sm:flex-row w-full"
          >
            <Link href="/">
              <a className="flex items-center sm:mr-10 mb-3 sm:mb-0">
                {/* <Logo width={92} height={30} /> */}
                <Logo width={48} height={48} />
              </a>
            </Link>
            <div className="w-full max-w-[90%] sm:max-w-[584px]">
              <SearchForm
                inputRef={input}
                onSubmit={handleSubmit}
                darkMode={darkMode}
              />
            </div>
          </div>
          <div aria-label="right" className="hidden sm:block">
            <div className="flex items-center mr-4">
              <CogIcon
                className="w-8 fill-emerald-300 text-blue-400 cursor-pointer"
                onClick={enableModal}
              />
              {/* <div className="mx-4">
              <Link href="/">
                <a>
                  <ViewGridIcon className="w-5 fill-gray-700" />
                </a>
              </Link>
            </div> */}
              {/* <Link href="/" passHref>
              <a>
                <button className="px-5 py-2 w-24 rounded-md text-white text-sm bg-blue-600">
                  Sign in
                </button>
              </a>
            </Link> */}
            </div>
          </div>
        </header>
        <main className="flex flex-col">
          <div
            aria-label="search tabs"
            className="mt-3 ml-8 lg:ml-36 overflow-x-auto"
          >
            <ul className="flex">
              <li className="custom-search-tab custom-search-tab_active">
                <div className="flex">
                  <SearchIcon width={16} className="mr-2" />
                  <span>All</span>
                </div>
              </li>
              <li className="custom-search-tab">
                <div className="flex">
                  <PlayIcon width={16} className="mr-2" />
                  <span>Videos</span>
                </div>
              </li>
              <li className="custom-search-tab">
                <div className="flex">
                  <PhotographIcon width={16} className="mr-2" />
                  <span>Images</span>
                </div>
              </li>
              <li className="custom-search-tab">
                <div className="flex">
                  <NewspaperIcon width={16} className="mr-2" />
                  <span>News</span>
                </div>
              </li>
              <li className="custom-search-tab">
                <div className="flex">
                  <BookOpenIcon width={16} className="mr-2" />
                  <span>Books</span>
                </div>
              </li>
              <li className="custom-search-tab whitespace-nowrap">: More</li>
            </ul>
          </div>
          <div
            aria-label="border line"
            className="border-b border-gray-300 mb-2"
          ></div>
          <div
            aria-label="search results"
            className="min-h-[calc(80vh)] ml-8 lg:ml-36"
          >
            {isLoading ? (
              <span>Loading...</span>
            ) : error ? (
              <span>error: {error}</span>
            ) : data ? (
              <div className="flex flex-col">
                <div aria-label="search information" className="mb-4">
                  <SearchInfo {...data?.searchInformation} />
                </div>
                <div aria-label="search results" className="flex flex-col">
                  {data.items.map((item, i) => (
                    <SearchedItem key={i} {...item} darkMode={darkMode} />
                  ))}
                </div>
              </div>
            ) : (
              <span>no data</span>
            )}
          </div>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Search;
