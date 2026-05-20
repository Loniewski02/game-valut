import Link from "next/link";
import Image from "next/image";

import { TopGamesType } from "@/app/types";

import { BsArrowRightShort } from "react-icons/bs";
import Section from "../shared/layout/Section";
import RatingBadge from "../shared/ui/RatingBadge";

const TopGames = ({ games }: { games: TopGamesType }) => {
  return (
    <Section title="Top Rated Games" className="lg:w-1/2">
      {games.length === 0 ? (
        <p>No games found</p>
      ) : (
        <>
          {games.map((game, index) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="group mb-2 flex justify-between border-b pb-2 text-15 font-semibold transition last:border-none hover:bg-LightGray/50"
            >
              <div className="mr-3 flex items-center gap-3">
                <span className="mr-5 w-2">{index + 1}.</span>
                <div className="relative block h-8 w-12 overflow-hidden rounded-md bg-black sm:h-12 sm:w-20">
                  <Image fill alt={game.title} src={game.image} className="absolute left-0 top-0 object-cover" />
                  <div className="absolute left-0 top-0 z-10 h-full w-full bg-DarkGrayishBlue/20" />
                </div>
                <span className="transition group-hover:text-Primary sm:text-base md:text-lg lg:text-15">
                  {game.title}
                </span>
              </div>
              <RatingBadge rating={game.rating} />
            </Link>
          ))}
          {games.length > 4 && (
            <Link
              href="/rankings"
              className="mt-4 flex items-center justify-end text-13 font-semibold text-Primary transition hover:text-PrimaryHover"
            >
              view full ranking
              <BsArrowRightShort className="text-xl" />
            </Link>
          )}
        </>
      )}
    </Section>
  );
};

export default TopGames;
