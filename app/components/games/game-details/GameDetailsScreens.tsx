"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import Section from "../../layout/Section";

import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import imggie from "@/public/assets/witcher-3-hero.jpg";
import imggie2 from "@/public/assets/witcher-3-cover.jpg";
import imggie3 from "@/public/assets/hero.png";

const GameDetailsScreens = ({ screenshots }: { screenshots: string[] }) => {
  const [current, setCurrentScreenshot] = useState(0);
  const [isShown, setIsShown] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsShown(false);
      } else {
        setIsShown(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isShown]);

  const nextHandler = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevHandler = () => {
    setCurrentScreenshot((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  return (
    <Section title="screenshots">
      <div className="flex flex-col gap-3 lg:flex-row">
        {isShown && (
          <div className="hidden h-[500px] flex-col gap-1 overflow-y-scroll lg:flex">
            {screenshots.map((screen, index) => (
              <button
                key={screen}
                onClick={() => setCurrentScreenshot(index)}
                aria-label={`screenshot ${index + 1}`}
                className={`${current === index ? "border-Primary" : "border-transparent"} h-24 w-44 rounded-md border-2 transition`}
              >
                <Image
                  src={screen}
                  width={100}
                  height={50}
                  alt="game screenshot"
                  className="h-full w-full rounded-md object-cover"
                />
              </button>
            ))}
          </div>
        )}
        <div className="relative order-1 overflow-hidden rounded-2xl lg:order-2 lg:flex-1">
          <Image
            src={screenshots[current]}
            width={1200}
            height={700}
            alt="game screenshot"
            className="aspect-video h-[200px] w-full object-cover md:h-[360px] lg:h-[500px]"
          />
          <button
            onClick={prevHandler}
            aria-label="previous screenshot"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-xl bg-black/90 p-2 text-White "
          >
            <CgChevronLeft />
          </button>
          <button
            onClick={nextHandler}
            aria-label="next screenshot"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl bg-black/90 p-2 text-White"
          >
            <CgChevronRight />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default GameDetailsScreens;
