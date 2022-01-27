import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      alt="logo"
      width="272"
      height="92"
      layout="fixed"
    />
  );
}
