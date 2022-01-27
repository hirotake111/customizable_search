import type { NextPage } from "next";
import Logo from "../components/Logo";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="w-screen h-16 bg-slate-400">header</header>
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
      <footer className="h-20">footer</footer>
    </div>
  );
};

export default Home;
