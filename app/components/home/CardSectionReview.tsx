import { AiFillStar } from "react-icons/ai";

import ArrowLink from "./ArrowLink";

const CardSectionReview = () => {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-card p-6 md:p-8 md:py-10 lg:gap-6 lg:p-0">
      <div className={`h-28 min-w-28 rounded-lg bg-red lg:h-36 lg:min-w-36`} />
      <div className="flex flex-col gap-2 text-text">
        <p className="text-13 font-bold leading-normal lg:text-15">
          {`"Amazing story, unforgettable characters and the best RPG experience."`}
        </p>
        <p className="flex items-center justify-between text-15 font-bold text-primary">
          The Wither 3: Wild Hunt{" "}
          <span className="flex items-center gap-2 text-primary">
            9.9
            <AiFillStar className="text-xl" />
          </span>
        </p>
        <p className="text-15 text-textSec">
          <span className="text-13">by</span>
          {" Gracz123 "}
          <span className="text-13 ">2 hours ago</span>
        </p>
        <ArrowLink href="/reviews" txt="Read more reviews" className="hidden self-start lg:flex" />
      </div>
    </div>
  );
};

export default CardSectionReview;
