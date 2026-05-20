import Link from "next/link";
import Image from "next/image";

import { LatestReviewType } from "@/app/types";

import { BsArrowRightShort } from "react-icons/bs";
import Section from "../shared/layout/Section";
import RatingBadge from "../shared/ui/RatingBadge";
import { dateFormatterToNow } from "@/app/lib/helpers";

const LatestReview = ({ data }: { data: LatestReviewType }) => {
  return (
    <Section title="latest review" className="lg:w-1/2">
      {!data ? (
        <p>No review found</p>
      ) : (
        <div className="flex items-start justify-between gap-4 rounded-2xl md:gap-8 lg:gap-4 ">
          <div className="relative h-28 w-1/3 min-w-28 overflow-hidden rounded-lg lg:h-36 lg:min-w-36">
            <Image
              width={200}
              height={200}
              alt={data.game.title}
              src={data.game.image}
              className="absolute left-0 top-0 h-full w-full object-cover"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-DarkGrayishBlue/20" />
          </div>
          <div className="flex w-2/3 flex-col gap-2">
            <p className="text-13 leading-normal lg:text-15">{data.content}</p>
            <Link
              href={`/games/${data.game.slug}`}
              className="flex items-center justify-between text-15 font-semibold text-Primary transition hover:text-PrimaryHover"
            >
              <span className="mr-3">{data.game.title}</span>
              <RatingBadge rating={data.rating} />
            </Link>
            <p className="text-GrayishBlue">
              <span className="text-13">by</span>
              <Link
                href={`/users/${data.user.username}`}
                className="text-15 font-bold transition hover:text-PrimaryHover"
              >{` ${data.user.username} `}</Link>
              <span className="text-13 ">{dateFormatterToNow(data.createdAt)}</span>
            </p>
            <Link
              href={`/games/${data.game.slug}#reviews`}
              className="mt-4 flex items-center justify-end text-13 font-semibold text-Primary transition hover:text-PrimaryHover"
            >
              read more reviews
              <BsArrowRightShort className="text-xl" />
            </Link>
          </div>
        </div>
      )}
    </Section>
  );
};

export default LatestReview;
