import { TopGames } from "@/app/types";
import RatingBadge from "../layout/RatingBadge";

const CardSectionGame: React.FC<{ game: TopGames; index: number }> = ({ game, index }) => {
  return (
    <div className="mb-2 flex justify-between border-b pb-2 text-15 font-bold text-DarkGrayishBlue">
      <div className="flex items-center gap-3">
        <span className="mr-5 w-2">{index + 1}.</span>
        <span className="block h-8 w-12 rounded-md bg-black" />
        <span>{game.title}</span>
      </div>
      <RatingBadge textStyle="text-DarkGrayishBlue" rating={9.9} />
    </div>
  );
};

export default CardSectionGame;
