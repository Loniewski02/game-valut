"use client";
import { useState, useEffect } from "react";

import BurgerBtn from "../../ui/BurgerBtn";
import Logo from "../../ui/Logo";
import Wrapper from "../Wrapper";
import NavItems from "./NavItems";

const NavBar = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuShown(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenuHandler = () => {
    setIsMobileMenuShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsMobileMenuShown(false);
  };

  return (
    <nav className="bg-White px-6 py-8 md:px-8">
      <Wrapper className="flex flex-row items-center justify-between">
        <Logo onClick={hideMobileMenuHandler} />
        <BurgerBtn isShown={isMobileMenuShown} onClick={toggleMobileMenuHandler} />
        <NavItems isShown={isMobileMenuShown} onClose={hideMobileMenuHandler} />
      </Wrapper>
    </nav>
  );
};

export default NavBar;
