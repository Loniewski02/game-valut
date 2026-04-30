import Link from "next/link";
import ArrowLink from "./ArrowLink";
import RatingBadge from "../layout/RatingBadge";

const CardSectionReview = () => {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-White p-6 md:p-8 md:py-10 lg:gap-6 lg:p-0">
      <div className={`h-28 min-w-28 rounded-lg bg-black lg:h-36 lg:min-w-36`} />
      <div className="flex flex-col gap-2">
        <p className="text-13 leading-normal lg:text-15">
          {`"Amazing story, unforgettable characters and the best RPG experience."`}
        </p>
        <Link
          href="/games/gamename"
          className="flex items-center justify-between text-15 font-semibold text-Primary transition hover:text-PrimaryHover"
        >
          <span className="max-w-52">The Wither 3: Wild Hunt</span>
          <RatingBadge rating={9.9} />
        </Link>
        <p className="text-15 text-GrayishBlue">
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
