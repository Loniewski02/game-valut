import Link from "next/link";

import { GamePreview } from "@/app/types";
import { PLATFORM_SHORTCUTS } from "@/app/lib/constant";

import Hero from "../shared/layout/Hero";
import RatingBadge from "../shared/ui/RatingBadge";

import defalutImage from "@/public/assets/default.png";

type Props = { data: GamePreview; className?: string };

const GameLink = ({ data, className }: Props) => {
  const image = data.image ? data.image : defalutImage.src;

  return (
    <Link
      href={`/games/${data.slug}`}
      aria-label={data.slug}
      className={`${className && className} relative flex h-52 flex-col justify-end gap-3 overflow-hidden rounded-xl p-4 transition hover:scale-95 sm:px-6 md:px-4 lg:gap-4`}
    >
      <Hero src={image} width={300} height={100} alt={data.title} />
      <h3 className="z-10 text-15 font-bold leading-4 text-White sm:text-base sm:leading-4">{data.title}</h3>
      <div className="z-10 flex items-center justify-between gap-2">
        {data.rating && <RatingBadge rating={data.rating} reversed light />}
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
