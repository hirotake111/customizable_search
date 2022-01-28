import type { NextPage } from "next";
import Logo from "../components/Logo";
import {
  SearchIcon,
  MicrophoneIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="w-screen h-16 flex justify-end text-s">
        <Header />
      </header>
      <main className="flex flex-col items-center">
        <Logo />
        <div className="m-5 w-full max-w-[90%] sm:max-w-[584px]">
          <form className="flex items-center justify-between h-11 border-solid border border-gray-300 rounded-full  px-5 hover:shadow-md transition focus-within:shadow-md">
            <SearchIcon className="fill-gray-500 w-5 hover:cursor-pointer" />
            <input
              type="text"
              className="focus:outline-none w-full px-2 pb-0.5"
            />
            <div>
              <MicrophoneIcon className="fill-gray-500 w-5 hover:cursor-pointer" />
            </div>
          </form>
          <div className="mt-7">
            <div className="flex justify-center">
              <button className="custom-btn mr-5">Google Search</button>
              <button className="custom-btn">I'm Feeling Lucky</button>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-600">
          Google offered in:{" "}
          <a href="#" className="text-blue-700 hover:underline">
            日本語
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
