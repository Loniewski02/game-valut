import { TopGames } from "@/app/types";
import RatingBadge from "../layout/RatingBadge";

type Props = { game: TopGames; index: number };

const CardSectionGame = ({ game, index }: Props) => {
  return (
    <div className="mb-2 flex justify-between border-b pb-2 text-15 font-semibold">
      <div className="flex items-center gap-3">
        <span className="mr-5 w-2">{index + 1}.</span>
        <span className="block h-8 w-12 rounded-md bg-black" />
        <span>{game.title}</span>
      </div>
      <RatingBadge rating={9.9} />
    </div>
  );
};

export default CardSectionGame;
