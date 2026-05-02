import Link from "next/link";

import RatingBadge from "../layout/RatingBadge";

import Hero from "../layout/Hero";

import { Game } from "@/app/types";
import { PLATFORM_SHORTCUTS } from "@/app/utils/constant";

type Props = { data: Game };

const GameLink = ({ data }: Props) => {
  return (
    <Link
      href={`/games/${data.slug}`}
      aria-label={data.slug}
      className="relative flex h-52 w-full flex-col justify-end gap-3 overflow-hidden rounded-xl p-4 transition hover:scale-95 sm:px-6 md:px-4 lg:gap-4"
    >
      <Hero src={data.imageFull} width={300} height={100} alt={data.title} />
      <h3 className="z-10 text-15 font-bold leading-4 text-White sm:text-base sm:leading-4">{data.title}</h3>
      <div className="z-10 flex items-center justify-between gap-2">
        <RatingBadge rating={data.rating} reversed light />
        <div className="flex justify-end gap-1 ">
          {data.platforms.map((item) => (
            <span key={item} className="rounded-md bg-Gray/20 px-2 py-1 text-13 uppercase tracking-tighter text-White">
              {PLATFORM_SHORTCUTS[item.toLocaleLowerCase()]}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default GameLink;
