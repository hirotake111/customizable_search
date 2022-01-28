import { ViewGridIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <>
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
    </>
  );
}
