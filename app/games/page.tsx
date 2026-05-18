"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useFetch } from "../hooks/useFetch";
import { GamePreview } from "../types";

import { BsController } from "react-icons/bs";
import GamesControls from "../components/games/GamesControls";
import FetchSection from "../components/shared/states/FetchSection";
import EmptySection from "../components/shared/states/EmptySection";
import Button from "../components/shared/ui/Button";
import Plus from "../components/shared/ui/Plus";
import Section from "../components/shared/layout/Section";
import GameLink from "../components/games/GameLink";
import AddGameModal from "../components/games/AddGameModal";

const Games = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");
  const title = searchParams.get("title") ?? "";

  const { data: games, isLoading, error } = useFetch<GamePreview[]>(`/api/games?${searchParams.toString()}`);
  const [openedSelect, setOpenedSelect] = useState<string | null>(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [search, setSearch] = useState(title);

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`);
  };

  const clearFiltersHandler = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("title");
    params.delete("genre");
    params.delete("platform");

    setOpenedSelect(null);
    setSearch("");

    router.push(`?${params.toString()}`);
  };

  const selectHandler = (text: string | null) => {
    setOpenedSelect((prev) => (prev === text ? null : text));
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    updateParams("title", search.trim());
  };

  const platformHandler = (value: string | null) => updateParams("platform", value);
  const genreHandler = (value: string | null) => updateParams("genre", value);
  const openModalHandler = () => setIsModalOpened(true);

  return (
    <>
      <GamesControls
        search={search}
        platform={platform}
        genre={genre}
        openedSelect={openedSelect}
        onSearch={setSearch}
        onSubmit={submitHandler}
        onPlatform={platformHandler}
        onGenre={genreHandler}
        onSelect={selectHandler}
        onModal={openModalHandler}
      />
      <FetchSection isLoading={isLoading} error={error}>
        {!games || games.length === 0 ? (
          <EmptySection
            title="No games yet"
            text="No games added yet. This library is built by the community."
            Icon={BsController}
            hasFilters={platform || genre || title}
            onClear={clearFiltersHandler}
          >
            <Button className="mt-6" onClick={() => setIsModalOpened(true)}>
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
