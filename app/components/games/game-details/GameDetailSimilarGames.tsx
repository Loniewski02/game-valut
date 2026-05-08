import React from "react";
import Section from "../../layout/Section";
import GameLink from "../GameLink";

import { GAMES } from "@/app/utils/constant";
import { Game } from "@/app/types";

const GameDetailSimilarGames = ({ game }: { game: Game }) => {
  const similarGames = GAMES.map((item) => {
    const matchedGenres = item.genres.filter((genre) => game?.genres.includes(genre));

    return {
      ...item,
      similarity: matchedGenres.length,
    };
  })
    .filter((item) => item.id !== game?.id && item.similarity >= 2)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 6);

  return (
    <>
      {similarGames && similarGames.length > 0 && (
        <Section title="Similar Games">
          <div className="flex gap-4 overflow-y-hidden pb-2">
            {similarGames.map((item) => (
              <GameLink key={item.id} data={item} className="min-w-60" />
            ))}
          </div>
        </Section>
      )}
    </>
  );
};

export default GameDetailSimilarGames;
