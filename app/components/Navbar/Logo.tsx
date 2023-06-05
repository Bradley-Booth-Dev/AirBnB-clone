"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src="/images/logo.png"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      alt="Logo"
    />
  );
};

export default Logo;
