"use client";
import { useRef, useState } from "react";

import GamesEmpty from "../components/games/GamesEmpty";
import Section from "../components/layout/Section";
import GameLink from "../components/games/GameLink";
import SelectButton from "../components/ui/SelectButton";
import Plus from "../components/layout/Plus";
import Button from "../components/ui/Button";

import { GAMES, GENRES, PLATFORMS } from "../utils/constant";
import Wrapper from "../components/layout/Wrapper";

const Games = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);
  const [genre, setGenre] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [opened, setOpened] = useState<string | null>(null);

  const platformHandler = (text: string | null) => {
    setPlatform(text);
  };

  const genreHandler = (text: string | null) => {
    setGenre(text);
  };

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const openedHandler = (name: string | null) => {
    setOpened((prev) => (prev === name ? null : name));
  };

  const filteredGames = GAMES.filter((game) => {
    const matchesPlatform = !platform || game.platforms.includes(platform);
    const matchesGenre = !genre || game.genres.includes(genre);
    const matchesName = title.length === 0 || game.title.toLowerCase().includes(title.toLowerCase());

    return matchesPlatform && matchesGenre && matchesName;
  });

  return (
    <>
      <section className="py-2 md:py-4">
        <Wrapper className={`rounded-2xl bg-White p-6`}>
          <div className="mb-8 grid gap-4 sm:grid-cols-3 sm:gap-y-0 md:mb-0">
            <h2 className="text-2xl font-semibold first-letter:uppercase sm:order-1 sm:col-span-2 sm:text-3xl">
              Games Library
            </h2>
            <p className="text-GrayishBlue sm:order-3 sm:col-span-2">This library is built by the community.</p>
            <Button className="sm:order-2 sm:w-max sm:place-self-end">
              <Plus />
              Add Game
            </Button>
          </div>
          <div className="overflow relative grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-5 md:grid-rows-1">
            <div className="relative col-span-2 md:col-span-3">
              <label htmlFor="search-game" className="invisible absolute z-10 text-13 text-GrayishBlue">
                Search games
              </label>
              <input
                id="search-game"
                type="text"
                name="search-game"
                value={title}
                className="z-20 w-full rounded-xl border border-Gray bg-White py-3 pl-5 pr-4 text-15 placeholder:text-GrayishBlue"
                placeholder="Search games..."
                onClick={() => {
                  setOpened(null);
                }}
                onChange={titleHandler}
              />
            </div>
            <SelectButton
              text="All platforms"
              name="platform"
              items={PLATFORMS}
              selected={platform}
              onSelect={platformHandler}
              onOpen={openedHandler}
              opened={opened}
            />
            <SelectButton
              text="all genres"
              name="genre"
              items={GENRES}
              selected={genre}
              onSelect={genreHandler}
              onOpen={openedHandler}
              opened={opened}
            />
          </div>
        </Wrapper>
      </section>
      {filteredGames && filteredGames.length > 0 ? (
        <Section wrapperClassName="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map((game) => (
            <GameLink key={game.id} data={game} />
          ))}
          <div ref={loaderRef} />
        </Section>
      ) : (
        <GamesEmpty />
      )}
    </>
  );
};

export default Games;
