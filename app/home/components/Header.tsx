"use client";
import { Button } from "@/components/ui/button";
import {
  Building2,
  LocateIcon,
  Store,
  TextAlignJustify,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CartDropdown } from "../components";
import ActiveHeaderLink from "./ActiveLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between mx-auto sm:py-5 py-3 px-4 border-b-solid border-b border-b-[#ddd] relative">
      <Link href="/" className="font-bold text-2xl flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#ff8800"
          stroke="currentColor"
          stroke-width="1"
          strokeLinejoin="round"
          stroke-linejoin="round"
          className="lucide lucide-chef-hat-icon lucide-chef-hat text-[#ff8800]"
        >
          <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
          <path d="M6 17h12" />
        </svg>
        Unidine
      </Link>
      <NavLinks isOpen={isOpen} />
      <div className="flex gap-1">
        <ActiveHeaderLink iconSize="icon-sm" path="/cart" Icon={Store} />
        <ActiveHeaderLink
          iconSize="icon-sm"
          path="/companies"
          Icon={Building2}
        />
        <CartDropdown />
        <ActiveHeaderLink
          iconSize="icon-sm"
          path="/locations"
          Icon={LocateIcon}
        />

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden"
          variant="outline"
        >
          {!isOpen ? <TextAlignJustify /> : <X />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
function NavLinks({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {isOpen ? (
        <section className="flex gap-10 items-center max-md:flex-col max-md:absolute max-md:top-16 max-md:gap-15 max-md:text-4xl max-md:h-[calc(100svh-64px)] max-md:w-full max-md:left-0 max-md:bg-[#dda15e] max-md:pt-40 max-md:font-[propagan] z-100">
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <Link href="/"> {item} </Link>
          ))}
        </section>
      ) : (
        ""
      )}
    </>
  );
}
