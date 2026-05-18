import { prisma } from "@/app/lib/prisma";

import GameDetailAbout from "@/app/components/game-details/GameDetailAbout";
import GameDetailHeader from "@/app/components/game-details/GameDetailHeader";
import GameDetailInfo from "@/app/components/game-details/GameDetailInfo";
import GameDetailRating from "@/app/components/game-details/GameDetailRating";
import GameDetailSimilarGames from "@/app/components/game-details/GameDetailSimilarGames";
import GameDetailsReviews from "@/app/components/game-details/GameDetailsReviews";
import GameDetailsScreens from "@/app/components/game-details/GameDetailsScreens";
import Wrapper from "@/app/components/shared/layout/Wrapper";
import NotFound from "@/app/not-found";


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
