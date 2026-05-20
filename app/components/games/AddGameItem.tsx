import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { MessagesContext } from "../_providers/MessagesContext";

import defalutImage from "@/public/assets/default.png";

type Game = {
  id: number;
  name: string;
  backgroundImage: string;
};

const AddGameItem = ({ game }: { game: Game; onClose: () => void }) => {
  const router = useRouter();
  const { setNewMessage } = useContext(MessagesContext);

  const addGameHandler = async () => {
    try {
      const response = await fetch(`/api/games/add-game/${game.id}`, {
        method: "POST",
      });

      const data = await response.json();
      if (!response.ok) {
        setNewMessage(response.status, data.message);
        return;
      }

      setNewMessage(response.status, data.message);

      router.push(`/games/${data.game.slug}`);
    } catch (error) {
      console.error(error);
      setNewMessage(500, "Something went wrong");
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
