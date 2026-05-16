
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

import Wrapper from "../layout/Wrapper";
import FormBox from "../ui/FormBox";
import AddGameItem from "./AddGameItem";
import LoadingIndicator from "../ui/LoadingIndicator";
import Submit from "../auth/Submit";

import { ADD_GAME_INPUT } from "@/app/utils/constant";

type Props = {
  onClose: () => void;
  isShown: boolean;
};

type Game = {
  id: number;
  name: string;
  backgroundImage: string;
};

const AddGameModal = ({ onClose, isShown }: Props) => {
  const [games, setGames] = useState<Game[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isShown ? "hidden" : "";
    document.body.style.position = isShown ? "fixed" : "";

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, [isShown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 grid place-items-center p-4">
      <div
        className="fixed bottom-0 left-0 right-0 top-0 cursor-pointer bg-black/50 backdrop-blur-[4px]"
        onClick={onClose}
      />
      <Wrapper className="relative z-30 max-w-xl rounded-2xl bg-White px-4 py-6 text-2xl sm:p-6 md:max-w-2xl md:px-8 md:py-10">
        <button
          aria-label="close"
          className="absolute right-0 top-0 p-4 text-DarkGrayishBlue hover:text-Primary"
          onClick={onClose}
        >
          <IoMdClose className="text-3xl" />
        </button>
        <h3 className="mb-2 text-2xl font-semibold first-letter:uppercase">add game</h3>
        <p className="mb-2 text-15 leading-tight text-GrayishBlue first-letter:uppercase">
          search for a game by title and add it to our library.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <FormBox input={ADD_GAME_INPUT} />
          <Submit>
            <BiSearch className="text-xl text-White" />
          </Submit>
        </form>
        {games && games.length > 0 && (
          <div className="mt-6 max-h-[450px] overflow-y-scroll scroll-smooth rounded-2xl bg-LightGray/50 p-2">
            {!loading && games.map((game) => <AddGameItem key={game.name} game={game} onClose={onClose} />)}
          </div>
        )}
        {loading && <LoadingIndicator className="mt-8" />}
      </Wrapper>
    </div>
  );
};

export default AddGameModal;
