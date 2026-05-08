import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import Section from "../../layout/Section";
import RatingBadge from "../../layout/RatingBadge";

// ujnia z grzybnią, wszystko do przerobienia bedzie

const RATING = [
  { rating: 10, ratings: 90 },
  { rating: 9, ratings: 40 },
  { rating: 8, ratings: 22 },
  { rating: 7, ratings: 15 },
  { rating: 6, ratings: 10 },
  { rating: 5, ratings: 1 },
  { rating: 4, ratings: 1 },
  { rating: 3, ratings: 3 },
  { rating: 2, ratings: 0 },
  { rating: 1, ratings: 0 },
];

const GameDetailRating = ({ rating }: { rating: number }) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsShown(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isShown]);

  const isShownHandler = () => {
    setIsShown((prev) => !prev);
  };

  const totalRatings = RATING.reduce((acc, item) => acc + item.ratings, 0);

  return (
    <Section title="community rating">
      <div className="items-center gap-24 md:flex md:px-8 lg:px-14">
        <div className="min-w-max">
          <div className="flex justify-between md:block">
            <RatingBadge rating={rating} textClassName="text-4xl font-semibold mr-2" iconClassName="text-3xl" />
            <button
              className={`${isShown ? "rotate-180 text-Primary" : "rotate-0 text-DarkGrayishBlue"} text-3xl transition md:hidden`}
              aria-label="show detailed reating"
              onClick={isShownHandler}
            >
              <MdKeyboardArrowDown />
            </button>
          </div>
          <p className="mt-2 text-15 text-GrayishBlue">Based on {totalRatings} user reviews</p>
        </div>
        <div
          className={`${isShown ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} mt-6 flex w-full flex-col gap-3 overflow-hidden transition-all md:max-h-none md:w-3/5 md:gap-1 md:opacity-100`}
        >
          {RATING.map((item) => {
            const width = (item.ratings / totalRatings) * 100;
            if (width >= 0.1) {
              return (
                <div key={item.rating} className="flex items-center gap-4">
                  <RatingBadge rating={item.rating} />
                  <div className="relative h-2 w-full overflow-hidden rounded-xl bg-Gray">
                    <div
                      className="absolute bottom-0 left-0 top-0 rounded-xl bg-Primary transition-all"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <span className="min-w-10 text-right text-GrayishBlue">{Math.round(width)}%</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Section>
  );
};

export default GameDetailRating;
