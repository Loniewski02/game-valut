"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";

import Wrapper from "../layout/Wrapper";
import BurgerBtn from "../ui/BurgerBtn";
import Logo from "../ui/Logo";

import { ROUTES } from "@/app/utils/constant";
import TextLink from "../ui/TextLink";

const NavBar = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "";
        setIsMobileMenuShown(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuShown ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuShown]);

  const showMobileMenuHandler = () => {
    setIsMobileMenuShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsMobileMenuShown(false);
  };

  return (
    <nav className="sectionX bg-White py-8 md:py-10">
      <Wrapper className="flex flex-row items-center justify-between">
        <Logo ico="text-4xl" font="text-xl" onClick={hideMobileMenuHandler} />
        <BurgerBtn isShown={isMobileMenuShown} onClick={showMobileMenuHandler} />
        <div
          className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuShown ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute bottom-0 left-0 top-0 z-40 flex w-[75%] flex-col rounded-r-[40px] bg-White px-6 pb-12">
            <div className="relative grid min-h-[103px] items-center py-8 md:py-10">
              <Logo ico="text-4xl" font="text-xl" onClick={hideMobileMenuHandler} />
              <div className="absolute bottom-0 h-[2px] w-full rounded-sm bg-Gray" />
            </div>

            <div className="flex h-full flex-col gap-4 pt-8">
              {ROUTES.map((route) => {
                const Icon = route.icon;
                return (
                  <Link
                    key={route.id}
                    href={route.url}
                    aria-label={route.name}
                    onClick={hideMobileMenuHandler}
                    className="flex items-center gap-4 py-2 text-lg font-bold text-DarkGrayishBlue transition hover:text-Primary active:text-Primary"
                  >
                    <Icon className="text-2xl" />
                    {route.name}
                  </Link>
                );
              })}
            </div>
            <div className="relative pt-6">
              <div className="absolute top-0 h-[2px] w-full rounded-sm bg-Gray" />
              <Link
                href="/auth"
                aria-label="log-in"
                onClick={hideMobileMenuHandler}
                className="mb-4 flex items-center gap-4 pt-2 text-lg font-bold text-DarkGrayishBlue transition hover:text-Primary"
              >
                <BiLogIn className="text-2xl" />
                Sign in
              </Link>
              <TextLink href="/auth?mode=register" text="Don't have an account?">
                Sign up.
              </TextLink>
            </div>
          </div>
          <div
            onClick={hideMobileMenuHandler}
            className="absolute bottom-0 right-0 top-0 z-30 w-[100%] bg-black/15 backdrop-blur-[2px]"
          />
        </div>
      </Wrapper>
    </nav>
  );
};

export default NavBar;
