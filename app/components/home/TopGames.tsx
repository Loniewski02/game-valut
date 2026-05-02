import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

import RatingBadge from "../layout/RatingBadge";
import Section from "../layout/Section";

import { Game } from "@/app/types";

const TopGames = ({ games }: { games: Game[] }) => {
  return (
    <Section title="top games this week" className="lg:w-1/2">
      {games.map((game, index) => (
        <div key={game.id} className="mb-2 flex justify-between border-b pb-2 text-15 font-semibold">
          <div className="mr-3 flex items-center gap-3">
            <span className="mr-5 w-2">{index + 1}.</span>
            <span className="block h-8 min-w-12 rounded-md bg-black" />
            <span>{game.title}</span>
          </div>
          <RatingBadge rating={game.rating} />
        </div>
      ))}
      <Link
        href="/rankings"
        className="mt-4 flex items-center justify-end text-13 font-semibold text-Primary transition hover:text-PrimaryHover"
      >
        read more reviews
        <BsArrowRightShort className="text-xl" />
      </Link>
    </Section>
  );
};

export default TopGames;
