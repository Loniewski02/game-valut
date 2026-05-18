import { prisma } from "@/app/lib/prisma";

import { Game } from "@/app/generated/prisma/client";
import { GamePreview } from "@/app/types";

import Section from "../shared/layout/Section";
import GameLink from "../games/GameLink";

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
      reviews: {
        select: {
          rating: true,
        },
      },
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
              const totalRating = item.reviews.reduce((sum, review) => sum + review.rating, 0);

              const data: GamePreview = {
                id: item.id,
                slug: item.slug,
                title: item.title,
                rating: item.reviews.length > 0 ? Number((totalRating / item.reviews.length).toFixed(2)) : 0,
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
