import { FormEventHandler, useEffect, useRef } from "react";
import { ViewGridIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../components/Logo";
import SearchForm from "../components/searchForm";
import Footer from "../components/Footer";

const Search: NextPage = () => {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const { q } = router.query;

  useEffect(() => {
    if (input.current && typeof q === "string") {
      input.current.value = q;
    }
  }, [input]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {};
  return (
    <div className="flex flex-col">
      <header className="flex justify-between flex-col sm:flex-row items-center pt-9 px-5 pb-2">
        <div
          aria-label="left"
          className="flex flex-col items-center sm:flex-row w-full"
        >
          <Link href="/">
            <a className="flex items-center sm:mr-5 mb-3 sm:mb-0">
              <Logo width={92} height={30} />
            </a>
          </Link>
          <div className="w-full max-w-[90%] sm:max-w-[584px]">
            <SearchForm inputRef={input} onSubmit={handleSubmit} />
          </div>
        </div>
        <div aria-label="right" className="hidden sm:block">
          <div className="flex items-center mr-4">
            <div className="mx-4">
              <Link href="/">
                <a>
                  <ViewGridIcon className="w-5 fill-gray-700" />
                </a>
              </Link>
            </div>
            <Link href="/">
              <a>
                <button className="px-5 py-2 w-24 rounded-md text-white text-sm bg-blue-600">
                  Sign in
                </button>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col">
        <ul className="flex ml-36">
          <li>All</li>
          <li>Videos</li>
          <li>Images</li>
          <li>News</li>
          <li>Books</li>
          <li>: More</li>
        </ul>
        <div className="min-h-[calc(80vh)] ml-36">results</div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
