import Image from "next/image";
import Link from "next/link";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import NavLink from "./NavLink";
import TextLink from "../ui/TextLink";
import { Session } from "next-auth";
import { Route } from "@/types";
import test from "@/public/assets/witcher-3-hero.jpg";

const loginBtnData: Route = { id: "login-link", name: "sign in", url: "/auth?mode=login", icon: BiLogIn };

function MobileItems({ session, onClose }: { session: Session; onClose: () => void }) {
  const logoutHandler = () => {};
  return (
    <div className="relative flex flex-col gap-4 pt-6 md:hidden">
      <div className="absolute top-0 h-[2px] w-full rounded-sm bg-Gray" />
      {session && status === "authenticated" && (
        <>
          <div className="">
            <Link href={`/users/${session.user.username}`} onClick={onClose} className="mb-4 flex items-center gap-4">
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
  );
}

export default MobileItems;
