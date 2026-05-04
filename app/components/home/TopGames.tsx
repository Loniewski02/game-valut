import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

import RatingBadge from "../layout/RatingBadge";
import Section from "../layout/Section";

import { Game } from "@/app/types";
import Image from "next/image";

const TopGames = ({ games }: { games: Game[] }) => {
  return (
    <Section title="top games this week" className="lg:w-1/2">
      {games.map((game, index) => (
        <div key={game.id} className="mb-2 flex justify-between border-b pb-2 text-15 font-semibold">
          <div className="mr-3 flex items-center gap-3">
            <span className="mr-5 w-2">{index + 1}.</span>
            <div className="relative block h-8 min-w-12 overflow-hidden rounded-md bg-black">
              <Image
                width={50}
                height={100}
                alt={game.title}
                src={game.imageFull}
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
              <div className="absolute left-0 top-0 z-10 h-full w-full bg-DarkGrayishBlue/20" />
            </div>
            <span>{game.title}</span>
          </div>
          <RatingBadge rating={game.rating} />
        </div>
      ))}
      <Link
        href="/rankings"
        className="mt-4 flex items-center justify-end text-13 font-semibold text-Primary transition hover:text-PrimaryHover"
      >
        view full ranking
        <BsArrowRightShort className="text-xl" />
      </Link>
    </Section>
  );
};

export default TopGames;
