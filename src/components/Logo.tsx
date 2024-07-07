import logo from "@/../../public/talgamedia-logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function Logo({ className, width = 200, height = 95 }: LogoProps) {
  return (
    <div className={cn("flex justify-center items-center h-screen", className)}>
      <Image src={logo} alt="Logo" width={width} height={height} />
    </div>
  );
}
