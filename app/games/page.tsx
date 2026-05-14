"use client";
import { useMemo, useState } from "react";
import { BsController } from "react-icons/bs";

import Section from "../components/layout/Section";
import GameLink from "../components/games/GameLink";
import Plus from "../components/layout/Plus";
import Button from "../components/ui/Button";
import AddGameModal from "../components/games/AddGameModal";
import EmptySection from "../components/layout/EmptySection";

import GamesControls from "../components/games/GamesControls";

import { GamePreview } from "../types";
import { useGames } from "../hooks/useGames";
import ErrorSection from "../components/layout/ErrorSection";
import LoadingIndicator from "../components/ui/LoadingIndicator";

const Games = () => {
  const [platform, setPlatform] = useState<string | null>(null);
  const [genre, setGenre] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [openedSelect, setOpenedSelect] = useState<string | null>(null);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const { games, isLoading, error } = useGames();

  const platformHandler = (text: string | null) => {
    setPlatform(text);
  };

  const genreHandler = (text: string | null) => {
    setGenre(text);
  };

  const titleHandler = (text: string) => {
    setTitle(text);
  };

  const openedSelectHandler = (name: string | null) => {
    setOpenedSelect((prev) => (prev === name ? null : name));
  };

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesPlatform = !platform || game.platforms.includes(platform);

      const matchesGenre = !genre || game.genres.includes(genre);

      const matchesName = title.length === 0 || game.title.toLowerCase().includes(title.toLowerCase());

      return matchesPlatform && matchesGenre && matchesName;
    });
  }, [games, platform, genre, title]);

  const openModalHandler = () => {
    setIsModalOpened(true);
  };

  const closeModalHandler = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <GamesControls
        platform={platform}
        genre={genre}
        openedSelect={openedSelect}
        onTitle={titleHandler}
        onGenre={genreHandler}
        onModal={openModalHandler}
        onPlatform={platformHandler}
        onSelect={openedSelectHandler}
      />
      {isLoading && <LoadingIndicator />}
      {!isLoading && error && <ErrorSection title={`${error.status}`} text={error.message} />}
      {!isLoading && !error && filteredGames.length === 0 && (
        <EmptySection
          title="No games yet"
          text="No games added yet. This library is built by the community. Be the first to add a game."
          Icon={BsController}
        >
          <Button className="mt-6">
            <Plus />
            Add Game
          </Button>
        </EmptySection>
      )}
      {!isLoading && !error && filteredGames.length > 0 && (
        <Section wrapperClassName="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map((game: GamePreview) => (
            <GameLink key={game.id} data={game} className="w-full" />
          ))}
        </Section>
      )}
      {isModalOpened && <AddGameModal isShown={isModalOpened} onClose={closeModalHandler} />}
    </>
  );
};

export default Games;
