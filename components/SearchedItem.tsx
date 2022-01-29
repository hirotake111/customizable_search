import Link from "next/link";

interface Props {
  title: string;
  link: string;
  snippet: string;
  darkMode?: boolean;
}

export default function SearchedItem({
  title,
  link,
  snippet,
  darkMode,
}: Props) {
  return (
    <div className="flex flex-col mb-5">
      <div aria-label="url" className="mb-1">
        <span className="text-sm text-gray-800">
          <Link href={link} passHref>
            <a target="_blank">{link}</a>
          </Link>
        </span>
      </div>
      <div aria-label="title" className="mb-1">
        <span
          className={`text-xl ${darkMode ? "text-blue-400" : "text-blue-800"}`}
        >
          <Link href={link} passHref>
            <a target="_blank">{title}</a>
          </Link>
        </span>
      </div>
      <div aria-label="snippet">
        <span
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {snippet}
        </span>
      </div>
    </div>
  );
}
