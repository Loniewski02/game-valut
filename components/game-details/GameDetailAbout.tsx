"use client";
import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import Section from "../shared/layout/Section";

const GameDetailAbout = ({ description }: { description: string }) => {
  const [isShown, setIsShown] = useState(false);

  const isShownToggler = () => setIsShown((prev) => !prev);

  return (
    <Section title="about" className="order-1 lg:w-3/5" wrapperClassName="relative">
      <button
        onClick={isShownToggler}
        className={`${isShown ? "rotate-180" : "rotate-0"} absolute right-4 top-4 p-2 transition-transform`}
        aria-label="show more"
      >
        <MdKeyboardArrowDown
          className={`${isShown ? "text-Primary hover:text-PrimaryHover" : "text-DarkGrayishBlue hover:text-Primary"} text-2xl`}
        />
      </button>
      <p className={`${isShown ? "line-clamp-none" : "line-clamp-6"} text-15 leading-relaxed`}>{description}</p>
    </Section>
  );
};

export default GameDetailAbout;
