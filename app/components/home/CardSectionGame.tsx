import { AiFillStar } from "react-icons/ai";

import { Game } from "@/app/types";

const CardSectionGame: React.FC<{ game: Game; index: number }> = ({ game, index }) => {
  return (
    <div className="mb-2 flex justify-between border-b pb-2 text-15 font-bold text-text">
      <div className="flex items-center gap-3">
        <span className="mr-5 w-2">{index + 1}.</span>
        <span className="block h-8 w-12 rounded-md bg-red" />
        <span>{game.title}</span>
      </div>
      <span className="flex items-center gap-2 text-primary">
        {game.rating}
        <AiFillStar className="text-xl" />
      </span>
    </div>
  );
};

export default CardSectionGame;
