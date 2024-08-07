"use client";
import React, { useState, useEffect } from "react";

//component
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);
  return (
    <header className={`${header ? "py-4 bg-white shadow-lg dark:bg-black" : "py-4 dark:bg-black"} sticky top-0 z-30 transition-all bg-[#fef9f5]`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <Logo />
          <div className="flex items-center gap-x-6 ">
            {/* nav */}
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" linkStyles="relative hover:text-primary transition-all" underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full" />
            <ThemeToggle />
            {/* Mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
