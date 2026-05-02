import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";

import RatingBadge from "../layout/RatingBadge";
import Section from "../layout/Section";

import { Game } from "@/app/types";

const LatestReview = ({ data }: { data: Game }) => {
  return (
    <Section title="latest review" className="lg:w-1/2">
      <div className="flex items-start justify-between gap-4 rounded-2xl bg-White ">
        <div className={`h-28 min-w-28 rounded-lg bg-black lg:h-36 lg:min-w-36`} />
        <div className="flex flex-col gap-2">
          <p className="text-13 leading-normal lg:text-15">
            {`"Amazing story, unforgettable characters and the best RPG experience."`}
          </p>
          <Link
            href={`/games/${data.slug}`}
            className="flex items-center justify-between text-15 font-semibold text-Primary transition hover:text-PrimaryHover"
          >
            <span className="max-w-52">{data.title}</span>
            <RatingBadge rating={data.rating} />
          </Link>
          <p className="text-15 text-GrayishBlue">
            <span className="text-13">by</span>
            {" Gracz123 "}
            <span className="text-13 ">2 hours ago</span>
          </p>
          <Link
            href="/rankings"
            className="mt-4 flex items-center justify-end text-13 font-semibold text-Primary transition hover:text-PrimaryHover"
          >
            read more reviews
            <BsArrowRightShort className="text-xl" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default LatestReview;
