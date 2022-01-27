import type { NextPage } from "next";
import Logo from "../components/Logo";
import {
  SearchIcon,
  MicrophoneIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="w-screen h-16 flex justify-end text-s">
        <div className="flex items-center mx-4">
          <div className="mr-4">
            <a href="#" className="hover:underline">
              Gmail
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Images
            </a>
          </div>
        </div>
        <div className="flex items-center mr-4">
          <div className="mr-4">
            <a href="#">
              <ViewGridIcon className="w-5 fill-gray-700" />
            </a>
          </div>
          <a href="#">
            <button className="px-7 py-2 rounded-md text-white bg-blue-600">
              Sign in
            </button>
          </a>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <Logo />
        <form className="flex items-center justify-between h-11 border-solid border border-gray-300 rounded-full max-w-lg w-full px-5 hover:shadow-md transition m-5 focus-within:shadow-md">
          <SearchIcon className="fill-gray-500 w-5 hover:cursor-pointer" />
          <input
            type="text"
            className="focus:outline-none w-full px-2 pb-0.5"
          />
          <div>
            <MicrophoneIcon className="fill-gray-500 w-5 hover:cursor-pointer" />
          </div>
        </form>
        <div className="">preferred language</div>
      </main>
      <footer className="flex flex-col text-sm text-gray-500 bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
