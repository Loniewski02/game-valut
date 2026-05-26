import { useState } from "react";

import { ADD_GAME_INPUT } from "@/utils/constant";
import { GamePreview } from "@/types";

import { BiSearch } from "react-icons/bi";
import FormBox from "../shared/ui/FormBox";
import Submit from "../shared/ui/buttons/Submit";
import AddGameItem from "./AddGameItem";
import LoadingIndicator from "../shared/states/LoadingIndicator";
import Modal from "../shared/ui/Modal";

type Props = {
  isShown: boolean;
  onClose: () => void;
  onAddGame: (game: GamePreview) => void;
};

type Game = {
  id: number;
  name: string;
  backgroundImage: string;
};

const AddGameModal = ({ onClose, isShown, onAddGame }: Props) => {
  const [games, setGames] = useState<Game[] | []>([]);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const query = formData.get("query");

    try {
      setLoading(true);

      const response = await fetch("/api/games/add-game/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }

      const data = await response.json();

      setGames(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isShown={isShown} onClose={onClose}>
      <h3 className="mb-2 text-2xl font-semibold first-letter:uppercase">add game</h3>
      <p className="mb-2 text-15 leading-tight text-GrayishBlue first-letter:uppercase">
        search for a game by title and add it to our library.
      </p>
      <form onSubmit={submitHandler} className="flex gap-2">
        <FormBox input={ADD_GAME_INPUT} />
        <Submit>
          <BiSearch className="text-xl text-White" />
        </Submit>
      </form>
      {games && games.length > 0 && (
        <div className="mt-6 max-h-[450px] overflow-y-scroll scroll-smooth rounded-2xl bg-LightGray/50 p-2">
          {!loading &&
            games.map((game) => (
              <AddGameItem key={game.name} game={game} onAdd={onAddGame} onLoading={setLoading} onClose={onClose} />
            ))}
        </div>
      )}
      {loading && <LoadingIndicator className="mt-8" />}
    </Modal>
  );
};

export default AddGameModal;
