import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center group">
        <Link href="/">
          <h1 className="text-5xl font-semibold group-hover:text-accent transition-all duration-500">
            kzm{" "}
            <span className="text-accent rounded-full group-hover:text-white">
              .
            </span>
          </h1>
        </Link>

        {/* Nav for large screens */}
        <div className="lg:flex items-center gap-8 nav-hidden">
          <Nav />
          <Link href="/contact">
            <Button className="text-[20px] font-medium">Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav for small screens */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
