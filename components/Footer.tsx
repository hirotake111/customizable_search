interface ATag {
  text: string;
  href: string;
}
const LeftATags: ATag[] = [
  { text: "About", href: "#" },
  { text: "Advertisin", href: "#" },
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
    <>
      <div className="flex items-center h-12 border-b border-gray-200 px-6">
        <span>United States</span>
      </div>
      <div className="flex justify-between items-center h-12 px-6">
        <div className="flex">
          {LeftATags.map((a) => (
            <a href={a.href} className="custom-a">
              {a.text}
            </a>
          ))}
        </div>
        <div className="flex">
          {RightATags.map((a) => (
            <a href={a.href} className="custom-a">
              {a.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
