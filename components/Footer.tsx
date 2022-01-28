import { ReactNode } from "react";

interface ATag {
  text: string;
  href: string;
}
const LeftATags: ATag[] = [
  { text: "About", href: "#" },
  { text: "Advertising", href: "#" },
  { text: "Business", href: "#" },
  { text: "How Search works", href: "#" },
];

const RightATags: ATag[] = [
  { text: "Privacy", href: "#" },
  { text: "Terms", href: "#" },
  { text: "Settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col text-sm text-gray-500 bg-gray-100">
      <div className="flex items-center h-12 border-b border-gray-200 px-6">
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
  );
}

const A = ({ children, href }: { href: string; children: ReactNode }) => (
  <a href={href} className="custom-a">
    {children}
  </a>
);