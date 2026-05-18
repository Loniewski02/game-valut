import Link from "next/link";
import Image from "next/image";

import { RankingItemType } from "@/app/types";
import { dateFormatter } from "@/app/lib/helpers";
import { PLATFORM_SHORTCUTS } from "@/app/lib/constant";

import Badge from "../shared/ui/Badge";
import RatingBadge from "../shared/ui/RatingBadge";

const RankingItem = ({ item, index }: { item: RankingItemType; index: number }) => {
  return (
    <Link
      href={`/games/${item.slug}`}
      className="group relative grid grid-cols-[34px,auto,1fr,48px] items-center gap-x-2 text-15 font-semibold transition hover:bg-LightGray/50 md:grid-cols-[34px,auto,1fr,200px,48px] md:gap-x-4 lg:grid-cols-[42px,auto,1fr,180px,220px,60px]  xl:grid-cols-[42px,auto,1fr,200px,300px,60px]"
    >
      <span className="w-8 text-center lg:text-lg">{index + 1}.</span>
      <div className="relative h-10 w-16 overflow-hidden rounded-lg sm:h-12 sm:w-24 md:h-14 md:w-24 lg:h-16 lg:w-28">
        <Image
          width={100}
          height={200}
          alt={item.title}
          src={item.image}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-DarkGrayishBlue/20" />
      </div>
      <div className="flex flex-col">
        <span className="transition hover:text-Primary group-hover:text-Primary sm:text-base lg:text-lg">
          {item.title}
        </span>
        <span className="hidden text-13 font-light text-GrayishBlue md:block">{dateFormatter(item.releaseDate)}</span>
      </div>
      <div className="hidden place-content-start gap-1 text-GrayishBlue md:flex">
        {item.platforms.map((platform) => (
          <Badge key={platform} item={PLATFORM_SHORTCUTS[platform.toLocaleLowerCase()]} uppercase />
        ))}
      </div>
      <div className="hidden flex-wrap place-content-start gap-1 text-Primary lg:flex">
        {item.genres.map((genre) => (
          <Badge key={genre} item={genre} />
        ))}
      </div>
      <RatingBadge rating={item.rating} reversed />
      <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-LightGray group-last:hidden md:-bottom-3" />
    </Link>
  );
};

export default RankingItem;
