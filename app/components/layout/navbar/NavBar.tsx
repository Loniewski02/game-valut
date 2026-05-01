"use client";
import { useState, useEffect } from "react";

import BurgerBtn from "../../ui/BurgerBtn";
import Logo from "../../ui/Logo";
import Wrapper from "../Wrapper";
import NavItems from "./NavItems";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "";
        document.body.style.position = "";
        setIsShown(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isShown ? "hidden" : "";
    document.body.style.position = isShown ? "fixed" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShown]);

  const toggleMobileMenuHandler = () => {
    setIsShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsShown(false);
  };

  return (
    <nav className="bg-White px-6 py-8 md:px-8">
      <Wrapper className="flex flex-row items-center justify-between">
        <Logo onClick={hideMobileMenuHandler} />
        <BurgerBtn isShown={isShown} onClick={toggleMobileMenuHandler} />
        <NavItems isShown={isShown} onClose={hideMobileMenuHandler} />
      </Wrapper>
    </nav>
  );
};

export default NavBar;
