import Image from "next/image";

import Header from "../layout/header/Header";
import Hero from "../layout/Hero";
import RatingBadge from "../layout/RatingBadge";
import Button from "../ui/Button";
import Plus from "../layout/Plus";

import { Game } from "@/app/types";

import { PLATFORM_SHORTCUTS } from "@/app/utils/constant";
import Badge from "../layout/Badge";

const GameDetailHeader = ({ data }: { data: Game }) => {
  return (
    <Header>
      <Hero width={1200} height={600} alt=";" src={data.imageFull} />
      <div className="relative z-20 flex h-max w-full flex-col gap-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-end md:gap-6 lg:gap-10">
        <Image
          width={200}
          height={400}
          alt="game image"
          src={data.imageSmall}
          className="h-full w-32 rounded-xl object-cover md:w-48 lg:w-56"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-LightGray md:mb-4 md:text-4xl">{data.title}</h1>
          <div className="flex items-center gap-2 md:mb-4 md:gap-3">
            <RatingBadge rating={data.rating} textClassName="md:text-lg" iconClassName="md:text-2xl" light reversed />
            <p className="text-13 text-Gray">(2,341 ratings)</p>
          </div>
          <div className="flex gap-1 text-LightGray">
            {data.platforms.map((item) => (
              <Badge item={PLATFORM_SHORTCUTS[item.toLocaleLowerCase()]} uppercase dark />
            ))}
          </div>
          <div className="flex gap-1 text-Primary">
            {data.genres.map((item) => (
              <Badge item={item} dark />
            ))}
          </div>
          <p className="text-13 text-Gray md:mt-4">Release Date: {data.releaseDate}</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <Button className="sm:max-w-56 lg:min-w-56">
            <Plus />
            Add Review
          </Button>
          <Button className="sm:max-w-56 lg:min-w-56" transparent>
            <Plus />
            Add To List
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default GameDetailHeader;
