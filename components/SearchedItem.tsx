import Link from "next/link";

interface Props {
  title: string;
  link: string;
  snippet: string;
}

export default function SearchedItem({ title, link, snippet }: Props) {
  return (
    <div className="flex flex-col mb-5">
      <Link href={link} passHref>
        <a target="_blank">
          <div aria-label="url" className="mb-1">
            <span className="text-sm text-gray-800">{link}</span>
          </div>
          <div aria-label="title" className="mb-1">
            <span className="text-xl text-blue-800">{title}</span>
          </div>
        </a>
      </Link>
      <div aria-label="snippet">
        <span className="text-sm text-gray-600">{snippet}</span>
      </div>
    </div>
  );
}
