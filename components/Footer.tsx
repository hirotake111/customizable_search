import Link from "next/link";
import { ReactNode } from "react";

interface ATag {
  text: string;
  href: string;
}
const LeftATags: ATag[] = [
  { text: "About", href: "/" },
  { text: "Advertising", href: "/" },
  { text: "Business", href: "/" },
  { text: "How Search works", href: "/" },
];

const RightATags: ATag[] = [
  { text: "Privacy", href: "/" },
  { text: "Terms", href: "/" },
  { text: "Settings", href: "/" },
];

interface Props {
  darkMode?: boolean;
}

export default function Footer({ darkMode }: Props) {
  return (
    <div className={[darkMode ? "bg-slate-900" : "bg-gray-100"].join(" ")}>
      <footer className="flex flex-col text-sm text-gray-500">
        <div
          className={[
            "flex items-center h-12 px-6 border-gray-200",
            darkMode ? "" : "border-b",
          ].join(" ")}
        >
          <span>United States</span>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row px-6">
          <div className="flex">
            {LeftATags.map(({ text, href }) => (
              <A key={text} href={href}>
                {text}
              </A>
            ))}
          </div>
          <div className="flex">
            {RightATags.map(({ text, href }) => (
              <A key={text} href={href}>
                {text}
              </A>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

const A = ({ children, href }: { href: string; children: ReactNode }) => (
  <Link href={href} passHref>
    <a>
      <div className="custom-a">{children}</div>
    </a>
  </Link>
);
