import Image from "next/image";
import Link from "next/link";

import { Game } from "@/app/generated/prisma/client";
import { PLATFORM_SHORTCUTS } from "@/app/lib/constant";

import Header from "../shared/layout/Header";
import Hero from "../shared/layout/Hero";
import RatingBadge from "../shared/ui/RatingBadge";
import Badge from "../shared/ui/Badge";
import Button from "../shared/ui/Button";
import Plus from "../shared/ui/Plus";

const GameDetailHeader = ({
  game,
  addedBy,
  rating,
  count,
}: {
  game: Game;
  addedBy: string;
  rating: number | string;
  count: number;
}) => {
  const revieved = false;
  const addedToList = false;

  return (
    <Header>
      <Hero width={1200} height={600} alt={`background image of ${game.title}`} src={game.cover} />
      <div className="relative z-20 flex h-max w-full flex-col gap-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-end md:gap-6 lg:gap-10">
        <div className="relative h-48 w-32 overflow-hidden rounded-xl object-cover md:h-72 md:w-44 lg:h-80 lg:w-52">
          <Image src={game.image} alt={`background image of ${game.title}`} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-LightGray md:mb-4 md:text-4xl">{game.title}</h1>
          {count > 0 && (
            <div className="flex items-center gap-2 md:mb-4 md:gap-3">
              <RatingBadge rating={rating} textClassName="md:text-lg" iconClassName="md:text-2xl" light reversed />
              <p className="text-13 text-Gray">{`(${count} ${count > 1 ? "ratings" : "rating"})`}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-1 text-LightGray">
            {game.platforms.map((item) => (
              <Badge key={item} item={PLATFORM_SHORTCUTS[item.toLocaleLowerCase()]} uppercase dark />
            ))}
          </div>
          <div className="flex flex-wrap gap-1 text-Primary">
            {game.genres.map((item) => (
              <Badge key={item} item={item} dark />
            ))}
          </div>
          <p className="text-13 text-Gray md:mt-4">
            Added by: <Link href={`/users/${addedBy}`}>{addedBy}</Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          {!revieved && (
            <Button className="sm:max-w-56 lg:min-w-56" href="#reviews" link>
              <Plus />
              Add Review
            </Button>
          )}
          {!addedToList && (
            <Button className="sm:max-w-56 lg:min-w-56" transparent>
              <Plus />
              Add To List
            </Button>
          )}
        </div>
      </div>
    </Header>
  );
};

export default GameDetailHeader;
