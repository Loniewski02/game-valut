"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

import { ROUTES } from "../../routes";

import Wrapper from "../layout/Wrapper";
import BurgerBtn from "../ui/BurgerBtn";

const NavBar = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "visible";
        setIsMobileMenuShown(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuShown]);

  useEffect(() => {
    isMobileMenuShown ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "visible");
  }, [isMobileMenuShown]);

  const showMobileMenuHandler = () => {
    setIsMobileMenuShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsMobileMenuShown(false);
  };

  return (
    <nav className="sectionX sticky left-0 right-0 top-0 z-20 bg-card px-4 py-8 md:py-10">
      <Wrapper className="flex flex-row items-center justify-between ">
        <Link href="/" aria-label="home-page" className="text-lg font-bold">
          Nazwa Strony
        </Link>
        <BurgerBtn isShown={isMobileMenuShown} onClick={showMobileMenuHandler} />
        <div
          className={`fixed inset-0 transition-transform duration-300 ease-in-out
    ${isMobileMenuShown ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="absolute bottom-0 left-0 top-0 z-40 flex w-[75%] flex-col rounded-r-[20px] bg-card px-6">
            <div className="grid h-full max-h-[103px] items-center">
              <Link href="/" aria-label="home-page" className="text-lg font-bold" onClick={hideMobileMenuHandler}>
                Nazwa Strony
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {ROUTES.map((route) => (
                <Link
                  key={route.id}
                  href={route.url}
                  aria-label={route.name}
                  onClick={hideMobileMenuHandler}
                  className="flex items-center gap-4 py-2 text-text"
                >
                  <span className="block h-4 w-4 bg-red"></span> {route.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 top-0 z-30 w-[100%] bg-black/15 backdrop-blur-sm" />
        </div>
      </Wrapper>
    </nav>
  );
};

export default NavBar;
