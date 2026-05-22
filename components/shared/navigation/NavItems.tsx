import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

import { Route } from "@/types";
import { ROUTES } from "@/utils/constant";

import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import Logo from "../ui/Logo";
import NavLink from "./NavLink";
import Button from "../ui/Button";
import TextLink from "../ui/TextLink";
import LoadingIndicator from "../states/LoadingIndicator";

import test from "@/public/assets/witcher-3-hero.jpg";

type Props = {
  isShown: boolean;
  onClose: () => void;
};

const loginBtnData: Route = { id: "login-link", name: "sign in", url: "/auth?mode=login", icon: BiLogIn };

const NavItems = ({ isShown, onClose }: Props) => {
  const { data: session, status } = useSession();
  const [opened, setOpened] = useState(false);

  const menuToggler = () => setOpened((prev) => !prev);
  const closeMenuHandler = () => setOpened(false);

  const logoutHandler = () => {
    closeMenuHandler();
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <div
      className={`${isShown ? "translate-x-0" : "translate-x-full"} fixed inset-0 z-40 transition-transform duration-300 md:relative md:block md:translate-x-0`}
    >
      <div className="absolute bottom-0 left-0 top-0 z-40 flex w-[75%] flex-col rounded-r-[40px] bg-White px-6 pb-12 md:relative md:p-0">
        <div className="relative grid min-h-[103px] items-center py-8 md:hidden">
          <Logo onClick={onClose} />
          <div className="absolute bottom-0 h-[2px] w-full rounded-sm bg-Gray" />
        </div>
        <div className="flex h-full flex-col gap-4 pt-8 md:flex-row md:gap-6 md:p-0">
          {ROUTES.map((route) => (
            <NavLink key={route.id} data={route} onClick={onClose} />
          ))}
          {session && status === "authenticated" && (
            <div className="relative ml-6 hidden min-w-24 md:block">
              <button onClick={menuToggler} className="flex items-center gap-3">
                <span className="text-15">{session.user.username}</span>
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-Gray">
                  <Image fill src={session.user.image || test.src} alt="profile" className="object-cover" />
                </div>
              </button>
              <div
                className={`${opened ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} opacity-1 -0 absolute -bottom-3 left-0 z-30 flex w-max translate-y-full flex-col rounded-xl border border-Gray bg-White p-4 transition`}
              >
                <Link
                  href={`/users/${session.user.username}`}
                  className="block px-3 py-2 text-15 hover:text-Primary"
                  onClick={closeMenuHandler}
                >
                  Profile
                </Link>
                <button
                  onClick={logoutHandler}
                  className="mt-1 w-full rounded-md border border-red-400 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
          {status === "unauthenticated" && (
            <Button className="ml-6 hidden md:block" href="/auth?mode=login" link>
              Log in
            </Button>
          )}
          {status === "loading" && <LoadingIndicator small className="ml-6" />}
        </div>
        <div className="relative flex flex-col gap-4 pt-6 md:hidden">
          <div className="absolute top-0 h-[2px] w-full rounded-sm bg-Gray" />
          {session && status === "authenticated" && (
            <>
              <div className="">
                <Link
                  href={`/users/${session.user.username}`}
                  onClick={onClose}
                  className="mb-4 flex items-center gap-4"
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-Gray">
                    <Image fill src={session.user.image || test.src} alt="profile" className="object-cover" />
                  </div>
                  <span>{session.user.username}</span>
                </Link>
                <button
                  onClick={logoutHandler}
                  className="flex w-full items-center gap-4 py-2 text-lg text-red-800 transition hover:text-red-500 md:gap-1 md:py-0"
                >
                  <BiLogOut className="text-2xl md:hidden" />
                  <span className="first-letter:uppercase">log out</span>
                </button>
              </div>
            </>
          )}
          {status === "unauthenticated" && (
            <>
              <NavLink data={loginBtnData} onClick={onClose} />
              <TextLink href="/auth?mode=register" text="Don't have an account?" onClick={onClose}>
                Sign up.
              </TextLink>
            </>
          )}
        </div>
      </div>
      <div
        onClick={onClose}
        className="absolute bottom-0 right-0 top-0 z-30 w-[100%] bg-black/15 backdrop-blur-[2px] md:hidden"
      />
    </div>
  );
};

export default NavItems;
