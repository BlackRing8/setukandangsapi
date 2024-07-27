import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/logo/logo-setu-kandang-sapi.png" width={60} height={60} className="w-10 h-10" priority alt="" />
      <span className="uppercase text-sm sm:text-xl font-semibold whitespace-nowrap ml-2">setu kandang sapi</span>
    </Link>
  );
};

export default Logo;
