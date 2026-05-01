"use client";
import { useState } from "react";

import GamesControls from "../components/games/controls/GamesControls";
import GamesEmpty from "../components/games/GamesEmpty";
import Wrapper from "../components/layout/Wrapper";
import Section from "../components/layout/Section";
import GameLink from "../components/games/GameLink";

import { GAMES } from "../utils/constant";

const Games = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [gameName, setGameName] = useState("");

  const platformHandler = (platform: string | null) => {
    setSelectedPlatform(platform);
  };

  const genreHandler = (genre: string | null) => {
    setSelectedGenre(genre);
  };

  const gameNameHandler = (name: string) => {
    setGameName(name);
  };

  const filteredGames = GAMES.filter((game) => {
    const matchesPlatform = !selectedPlatform || game.platforms.includes(selectedPlatform);
    const matchesGenre = !selectedGenre || game.genres.includes(selectedGenre);
    const matchesName = gameName.length === 0 || game.title.toLowerCase().includes(gameName.toLowerCase());

    return matchesPlatform && matchesGenre && matchesName;
  });

  return (
    <>
      <GamesControls
        onSelectedGenre={genreHandler}
        selectedGenre={selectedGenre}
        onSelectedPlatform={platformHandler}
        selectedPlatoform={selectedPlatform}
        onFilteredName={gameNameHandler}
        filteredName={gameName}
      />
      {filteredGames && filteredGames.length > 0 ? (
        <Section>
          <Wrapper className="grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredGames.map((game) => (
              <GameLink key={game.id} data={game} />
            ))}
          </Wrapper>
        </Section>
      ) : (
        <GamesEmpty />
      )}
    </>
  );
};

export default Games;
