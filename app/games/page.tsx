"use client";
import { useState } from "react";

import GamesControls from "../components/games/controls/GamesControls";
import GamesEmpty from "../components/games/GamesEmpty";
import Wrapper from "../components/layout/Wrapper";
import Section from "../components/layout/Section";
import GameLink from "../components/games/GameLink";
import { GAMES } from "../utils/constant";

const Games = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const platformHandler = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((item) => item !== platform) : [...prev, platform],
    );
  };

  const genreHandler = (platform: string) => {
    setSelectedGenres((prev) =>
      prev.includes(platform) ? prev.filter((item) => item !== platform) : [...prev, platform],
    );
  };

  return (
    <>
      <GamesControls
        onFilteredGenre={genreHandler}
        selectedGenre={selectedGenres}
        onFilteredPlatforms={platformHandler}
        selectedPlatoforms={selectedPlatforms}
      />
      <Section>
        <Wrapper className="grid place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {GAMES.map((game) => (
            <GameLink key={game.id} data={game} />
          ))}
        </Wrapper>
      </Section>
      <GamesEmpty />
    </>
  );
};

export default Games;
