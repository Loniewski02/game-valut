import { BiLogIn } from "react-icons/bi";

import NavLink from "./NavLink";
import Logo from "../../ui/Logo";
import TextLink from "../../ui/TextLink";

import { ROUTES } from "@/app/utils/constant";
import { Route } from "@/app/types";
import LinkBtn from "../../ui/LinkBtn";

type Props = {
  isShown: boolean;
  onClose: () => void;
};

const loginBtnData: Route = { id: "login-link", name: "sign in", url: "/auth?mode=login", icon: BiLogIn };

const NavItems = ({ isShown, onClose }: Props) => {
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
          <LinkBtn className="ml-6 hidden text-DarkGrayishBlue md:block" href="/auth?mode=login">
            Log in
          </LinkBtn>
        </div>
        <div className="relative flex flex-col gap-4 pt-6 md:hidden">
          <div className="absolute top-0 h-[2px] w-full rounded-sm bg-Gray" />
          <NavLink data={loginBtnData} onClick={onClose} />
          <TextLink href="/auth?mode=register" text="Don't have an account?" onClick={onClose}>
            Sign up.
          </TextLink>
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
