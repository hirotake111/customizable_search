import Link from "next/link";
import { ViewGridIcon } from "@heroicons/react/solid";
import { CogIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <>
      <div className="flex items-center mx-4">
        <div className="mr-4">
          <a href="#" className="hover:underline">
            Mail
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
          <Link href="/">
            <a>
              <ViewGridIcon className="w-5 fill-gray-700" />
            </a>
          </Link>
        </div>
        <CogIcon className="w-8 fill-emerald-300 text-blue-400 cursor-pointer" />
      </div>
    </>
  );
}
