import Link from "next/link";

import RatingBadge from "../layout/RatingBadge";
import { Game } from "@/app/types";

const PLATFORM_SHORTCUTS: Record<string, string> = {
  PC: "pc",
  PlayStation: "ps",
  Xbox: "xbox",
  Nintendo: "ns",
};

type Props = { data: Game };

const GameLink = ({ data }: Props) => {
  return (
    <Link
      href={`/games/${data.slug}`}
      aria-label={data.slug}
      className="relative flex h-40 w-full max-w-96 flex-col justify-end gap-3 overflow-hidden rounded-xl bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 hover:via-black/70 sm:px-6 md:px-4 lg:h-52 lg:gap-4"
    >
      <img src={data.image} alt={data.title} className="absolute bottom-0 left-0 right-0 top-0 z-0 object-cover" />
      <h3 className="z-10 text-15 font-bold leading-4 text-White sm:text-base sm:leading-4">{data.title}</h3>
      <div className="z-10 flex items-center justify-between gap-2">
        <RatingBadge rating={9.9} reversed light />
        <div className="flex justify-end gap-1 ">
          {data.platforms.map((item) => (
            <span key={item} className="rounded-md bg-Gray/20 px-2 py-1 text-13 uppercase tracking-tighter text-White">
              {PLATFORM_SHORTCUTS[item]}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default GameLink;
