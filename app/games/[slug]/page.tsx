import { prisma } from "@/app/lib/prisma";

import Wrapper from "@/app/components/layout/Wrapper";
import NotFound from "@/app/not-found";
import GameDetailHeader from "@/app/components/games/game-details/GameDetailHeader";
import GameDetailInfo from "@/app/components/games/game-details/GameDetailInfo";
import GameDetailAbout from "@/app/components/games/game-details/GameDetailAbout";
import GameDetailSimilarGames from "@/app/components/games/game-details/GameDetailSimilarGames";
import GameDetailRating from "@/app/components/games/game-details/GameDetailRating";
import GameDetailsReviews from "@/app/components/games/game-details/GameDetailsReviews";
import GameDetailsScreens from "@/app/components/games/game-details/GameDetailsScreens";

const Game = async ({ params }: { params: { slug: string } }) => {
  const game = await prisma.game.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      reviews: true,
      addedBy: {
        select: {
          username: true,
        },
      },
    },
  });

  if (!game) {
    return <NotFound />;
  }

  const totalReviews = game.reviews.length;

  const average =
    totalReviews > 0
      ? Number(game.reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(2)
      : 0;

  const distribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: game.reviews.filter((review) => review.rating === rating).length,
  }));

  const rating = {
    average,
    count: totalReviews,
    distribution,
  };

  return (
    <>
      <GameDetailHeader game={game} addedBy={game.addedBy.username} rating={rating.average} count={rating.count} />
      <Wrapper className="justify-start lg:flex lg:gap-4">
        <GameDetailInfo game={game} />
        <GameDetailAbout description={game.description} />
      </Wrapper>
      {rating.count > 0 && <GameDetailRating rating={rating} />}
      <GameDetailsScreens screenshots={game.screenshots} />
      <GameDetailSimilarGames game={game} />
      <GameDetailsReviews gameId={game.id} />
    </>
  );
};

export default Game;
