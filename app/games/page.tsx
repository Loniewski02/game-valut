"use client";
import { useState } from "react";

import GamesControls from "../components/games/controls/GamesControls";
import GamesEmpty from "../components/games/GamesEmpty";

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
      <GamesEmpty />
    </>
  );
};

export default Games;
