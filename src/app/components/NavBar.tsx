import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 z-50 flex w-full px-10 py-4 items-center justify-between">
      <div className="flex justify-between  w-full items-center">
        <div className="flex items-center gap-2">
          <Image src="/img/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" className="nav-hover-btn text-">
            Home
          </Link>
          <Link href="/about" className="nav-hover-btn">
            About
          </Link>
          <Link href="/story" className="nav-hover-btn">
            Story
          </Link>
          <Link href="/roadmap" className="nav-hover-btn">
            Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
