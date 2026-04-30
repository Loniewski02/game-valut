"use client";
import { useState } from "react";

import Wrapper from "../../layout/Wrapper";
import Section from "../../layout/Section";
import AddGameButton from "./AddGameButton";
import GamesControlsList from "./GamesControlsList";

import { GAME_GENRES, GAME_PLATFORMS } from "@/app/utils/constant";

type Props = {
  onFilteredPlatforms: (platform: string) => void;
  onFilteredGenre: (genre: string) => void;
  selectedPlatoforms: string[];
  selectedGenre: string[];
};

const GamesControls = ({ onFilteredPlatforms, onFilteredGenre, selectedPlatoforms, selectedGenre }: Props) => {
  const [opened, setOpened] = useState<string | null>(null);

  const listHandler = (name: string | null) => {
    setOpened(name);
  };

  return (
    <Section>
      <Wrapper className="flex flex-col gap-8">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-y-0">
          <h2 className="text-2xl font-semibold sm:order-1 sm:col-span-2 sm:text-3xl">Games Library</h2>
          <p className="text-GrayishBlue sm:order-3 sm:col-span-2">This library is built by the community.</p>
          <AddGameButton classList="w-full sm:order-2 sm:w-max sm:place-self-end" />
        </div>
        <div className="relative grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-5 md:grid-rows-1">
          <div className="relative col-span-2 md:col-span-3">
            <label htmlFor="search-game" className="invisible absolute z-10 text-13 text-GrayishBlue">
              Search games
            </label>
            <input
              id="search-game"
              type="text"
              name="search-game"
              className="z-20 w-full rounded-xl border border-Gray bg-White py-3 pl-5 pr-4 text-15 placeholder:text-GrayishBlue"
              placeholder="Search games..."
            />
          </div>
          <GamesControlsList
            onFilter={onFilteredPlatforms}
            selected={selectedPlatoforms}
            onOpen={listHandler}
            opened={opened}
            items={GAME_PLATFORMS}
            name="Platform"
          />
          <GamesControlsList
            onFilter={onFilteredGenre}
            onOpen={listHandler}
            opened={opened}
            selected={selectedGenre}
            items={GAME_GENRES}
            name="Genre"
          />
        </div>
      </Wrapper>
    </Section>
  );
};

export default GamesControls;
