import Image from "next/image";

interface Props {
  width?: number;
  height?: number;
}
export default function Logo({ width, height }: Props) {
  return (
    <Image
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      alt="logo"
      width={width ? width : 272}
      height={height ? height : 92}
      layout="fixed"
      priority
    />
  );
}
