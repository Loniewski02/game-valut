"use client";
import { useState, useEffect } from "react";

import Wrapper from "../Wrapper";
import BurgerBtn from "../../ui/BurgerBtn";
import Logo from "../../ui/Logo";
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
    <nav className="sectionX bg-White py-8">
      <Wrapper className="flex flex-row items-center justify-between">
        <Logo onClick={hideMobileMenuHandler} />
        <BurgerBtn isShown={isMobileMenuShown} onClick={toggleMobileMenuHandler} />
        <NavItems isShown={isMobileMenuShown} onClose={hideMobileMenuHandler} />
      </Wrapper>
    </nav>
  );
};

export default NavBar;
