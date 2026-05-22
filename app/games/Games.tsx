"use client";
import { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import { MessagesContext } from "../../components/_providers/MessagesContext";

import { useFetch } from "../../hooks/useFetch";
import { useFilters } from "@/hooks/useFilters";

import { GamePreview } from "../../types";

import { BsController } from "react-icons/bs";
import GamesControls from "../../components/games/GamesControls";
import FetchSection from "../../components/shared/states/FetchSection";
import EmptySection from "../../components/shared/states/EmptySection";
import Button from "../../components/shared/ui/Button";
import Plus from "../../components/shared/ui/Plus";
import Section from "../../components/shared/layout/Section";
import GameLink from "../../components/games/GameLink";
import AddGameModal from "../../components/games/AddGameModal";

const Games = () => {
  const { status } = useSession();
  const { searchParams, clear } = useFilters();
  const { setNewMessage } = useContext(MessagesContext);

  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");
  const title = searchParams.get("title") ?? "";

  const { data: games, isLoading, error } = useFetch<GamePreview[]>(`/api/games?${searchParams.toString()}`);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [search, setSearch] = useState(title);

  const clearFiltersHandler = () => {
    setSearch("");
    clear(["title", "genre", "platform"]);
  };

  const openModalHandler = () => {
    if (status === "unauthenticated") {
      setNewMessage(401, "Unauthorized");
      return;
    }
    setIsModalOpened(true);
  };

  return (
    <>
      <GamesControls onModal={openModalHandler} search={search} onSearch={setSearch} />
      <FetchSection isLoading={isLoading} error={error}>
        {!games || games.length === 0 ? (
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
        ) : (
          <Section wrapperClassName="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((game) => (
              <GameLink key={game.id} data={game} className="w-full" />
            ))}
          </Section>
        )}
      </FetchSection>
      {isModalOpened && <AddGameModal isShown={isModalOpened} onClose={() => setIsModalOpened(false)} />}
    </>
  );
};

export default Games;
