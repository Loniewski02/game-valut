import { prisma } from "@/lib/prisma";

import GameDetailAbout from "@/components/game-details/GameDetailAbout";
import GameDetailHeader from "@/components/game-details/GameDetailHeader";
import GameDetailInfo from "@/components/game-details/GameDetailInfo";
import GameDetailRating from "@/components/game-details/GameDetailRating";
import GameDetailSimilarGames from "@/components/game-details/GameDetailSimilarGames";
import GameDetailsReviews from "@/components/game-details/GameDetailsReviews";
import GameDetailsScreens from "@/components/game-details/GameDetailsScreens";
import Wrapper from "@/components/shared/layout/Wrapper";
import NotFound from "@/app/not-found";

const GameDetail = async ({ params }: { params: { slug: string } }) => {
  const game = await prisma.game.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      reviews: true,
      addedBy: {
        select: {
          username: true,
          usernameLower: true,
          id: true,
          favoriteGameId: true,
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
      <GameDetailHeader game={game} addedBy={game.addedBy} rating={rating.average} count={rating.count} />
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

export default GameDetail;
