import Image from "next/image";

import defalutImage from "@/public/assets/default.png";

type Game = {
  id: number;
  name: string;
  backgroundImage: string;
};

const AddGameItem = ({ game, onClose }: { game: Game; onClose: () => void }) => {
  const addGameHandler = async () => {
    const id = game.id;

    try {
      const response = await fetch(`/api/games/add-game/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }
      onClose();
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mb-2 flex items-center justify-between py-2 last:mb-0">
        <div className="flex items-center gap-2">
          <Image
            className="h-12 w-20 rounded-xl object-cover"
            width={100}
            height={50}
            alt="2"
            src={game.backgroundImage ? game.backgroundImage : defalutImage.src}
          />
          <h4 className="text-base font-semibold tracking-tight">{game.name}</h4>
        </div>
        <button
          onClick={addGameHandler}
          className="rounded-lg border border-Primary bg-Primary px-6 py-1 text-15 font-semibold text-White transition first-letter:uppercase hover:bg-PrimaryHover active:scale-95"
        >
          add
        </button>
      </div>
    </>
  );
};

export default AddGameItem;
