import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { FormEventHandler, RefObject } from "react";

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
export default function SearchForm({ inputRef, onSubmit }: Props) {
  return (
    <form
      className="flex items-center justify-between h-11 border-solid border border-gray-300 rounded-full  px-5 hover:shadow-md transition focus-within:shadow-md"
      onSubmit={onSubmit}
    >
      <SearchIcon className="fill-gray-500 w-5 hover:cursor-pointer" />
      <input
        className="focus:outline-none w-full px-2 pb-0.5"
        type="text"
        ref={inputRef}
      />
      <div>
        <MicrophoneIcon className="fill-gray-500 w-5 hover:cursor-pointer" />
      </div>
    </form>
  );
}
