"use client";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { MessagesContext } from "../../components/_providers/MessagesContext";
import { useFetch } from "../../hooks/useFetch";
import { useFilters } from "@/hooks/useFilters";

import { GamePreview } from "../../types";

import { BsController } from "react-icons/bs";
import GamesControls from "../../components/games/GamesControls";
import FetchSection from "../../components/shared/states/FetchSection";
import EmptySection from "../../components/shared/states/EmptySection";
import Button from "../../components/shared/ui/buttons/Button";
import Plus from "../../components/shared/ui/Plus";
import Section from "../../components/shared/layout/Section";
import GameLink from "../../components/games/GameLink";
import AddGameModal from "../../components/games/AddGameModal";
import PaginationButton from "@/components/shared/ui/buttons/PaginationButton";

const Games = () => {
  const { status } = useSession();
  const { searchParams, clear } = useFilters();
  const { setNewMessage } = useContext(MessagesContext);

  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");
  const title = searchParams.get("title") ?? "";

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [page, setPage] = useState(1);
  const [games, setGames] = useState<GamePreview[]>([]);
  const limit = 20;

  const { data, isLoading, error } = useFetch<GamePreview[]>(
    `/api/games?${searchParams.toString()}&page=${page}&limit=${limit}`,
  );

  const [search, setSearch] = useState(title);

  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setGames(data);
    } else {
      setGames((prev) => [...prev, ...data]);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [platform, genre, title]);

  const clearFiltersHandler = () => {
    setSearch("");
    clear(["title", "genre", "platform"]);
  };

  const addGameHandler = (game: GamePreview) => setGames((prev) => [game, ...prev]);

  const openModalHandler = () => {
    if (status === "unauthenticated") {
      setNewMessage(401, "Unauthorized");
      return;
    }
    setIsModalOpened(true);
  };

  const closeModalHandler = () => setIsModalOpened(false);

  const pageHandler = () => setPage((prev) => prev + 1);

  return (
    <>
      <GamesControls onModal={openModalHandler} search={search} onSearch={setSearch} />
      <FetchSection isLoading={isLoading} error={error}>
        {games &&
          (games.length > 0 ? (
            <Section>
              <div className="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {games.map((game) => (
                  <GameLink key={game.id} data={game} className="w-full" />
                ))}
              </div>
              {data && data.length === limit && <PaginationButton onClick={pageHandler} />}
            </Section>
          ) : (
            <EmptySection
              title="No games yet"
              text="No games added yet. This library is built by the community."
              Icon={BsController}
              hasFilters={platform || genre || title}
              onClear={clearFiltersHandler}
            >
              <Button className="mt-6" onClick={openModalHandler}>
                <Plus />
                Add Game
              </Button>
            </EmptySection>
          ))}
      </FetchSection>
      {isModalOpened && <AddGameModal isShown={isModalOpened} onAddGame={addGameHandler} onClose={closeModalHandler} />}
    </>
  );
};

export default Games;
