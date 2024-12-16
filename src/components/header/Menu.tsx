"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 *! Error: Scroll to id navigation doesn't work
 */


const Menu = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [open]);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);
  const normalLinkStyle =
    "text-lg tracking-wider capitalize text-white font-bold transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-[#CBACF9] hover:text-transparent hover:bg-clip-text  hover:border-b-2 hover:border-[#CBACF9]";
  const activeLinkStyle =
    "text-lg tracking-wider capitalize bg-gradient-to-r from-white to-[#CBACF9] text-transparent bg-clip-text font-bold border-b-2 border-[#CBACF9]";

  return (
    <>
      {isAboveMediumScreens ? (
        <ul className="flex items-center justify-between gap-6">
          <Link
            href={"/"}
            className={isActive("/") ? activeLinkStyle : normalLinkStyle}
            scroll={true}
          >
            Home
          </Link>
          <Link
            href={"#about"}
            className={isActive("#about") ? activeLinkStyle : normalLinkStyle}
            scroll={true}
          >
            About
          </Link>
          <Link
            href={"#projects"}
            className={
              isActive("#projects") ? activeLinkStyle : normalLinkStyle
            }
            scroll={true}
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            className={
              isActive("#projects") ? activeLinkStyle : normalLinkStyle
            }
            scroll={true}
          >
            Contact
          </Link>
        </ul>
      ) : (
        // Mobile Menu
        <div className="relative">
          {!open ? (
            <Bars3Icon
              fill="white"
              className="h-8 w-8 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          ) : (
            <div className="absolute  z-20 -top-4 -mt-5 -right-8 bg-black w-48 h-screen flex flex-col items-center gap-8">
              <XMarkIcon
                fill="white"
                className="h-8 w-8 cursor-pointer absolute right-6 mt-4"
                onClick={() => setOpen(false)}
              />
              <ul className="flex flex-col mt-20 gap-4 ">
                <Link
                  href={"/"}
                  className="text-xl capitalize "
                  onClick={() => setOpen(false)}
                  scroll={true}
                >
                  Home
                </Link>
                <Link
                  href={"#about"}
                  className="text-xl capitalize "
                  onClick={() => setOpen(false)}
                  scroll={true}
                >
                  About
                </Link>
                <Link
                  href={"#projects"}
                  className="text-xl capitalize "
                  onClick={() => setOpen(false)}
                  scroll={true}
                >
                  Projects
                </Link>
                <Link
                  href={"#contact"}
                  className="text-xl capitalize "
                  onClick={() => setOpen(false)}
                  scroll={true}
                >
                  Contact
                </Link>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Menu;
