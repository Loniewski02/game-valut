import { Game } from "@/app/generated/prisma/client";
import Section from "../../layout/Section";
import GameLink from "../GameLink";

import { prisma } from "@/app/lib/prisma";
import { GamePreview } from "@/app/types";

const GameDetailSimilarGames = async ({ game }: { game: Game }) => {
  const similarGames = await prisma.game.findMany({
    where: {
      id: {
        not: game.id,
      },
      genres: {
        hasSome: game.genres,
      },
    },

    select: {
      id: true,
      title: true,
      slug: true,
      image: true,
      platforms: true,
      genres: true,
    },
  });

  const minSimilarity = game.genres.length === 1 ? 1 : 2;

  const sortedGames = similarGames
    .map((item) => ({
      ...item,
      similarity: item.genres.filter((genre) => game.genres.includes(genre)).length,
    }))
    .filter((item) => item.similarity >= minSimilarity)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 6);

  return (
    <>
      {sortedGames.length > 0 && (
        <Section title="Similar Games">
          <div className="flex gap-4 overflow-y-hidden pb-2">
            {sortedGames.map((item) => {
              const data: GamePreview = {
                id: item.id,
                slug: item.slug,
                title: item.title,
                rating: null,
                image: item.image,
                genres: item.genres,
                platforms: item.platforms,
              };
              return <GameLink key={item.id} data={data} className="min-w-60" />;
            })}
          </div>
        </Section>
      )}
    </>
  );
};

export default GameDetailSimilarGames;
