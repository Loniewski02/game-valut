import { prisma } from "./lib/prisma";

import Features from "./components/home/Features";
import HomeHeader from "./components/home/HomeHeader";
import LatestReview from "./components/home/LatestReview";
import TopGames from "./components/home/TopGames";
import Wrapper from "./components/shared/layout/Wrapper";

export default async function Home() {
  const topGames = await prisma.game.findMany({
    where: {
      reviews: {
        some: {},
      },
    },
    select: {
      id: true,
      title: true,
      slug: true,
      image: true,
      reviews: {
        select: {
          rating: true,
        },
      },
    },
  });

  const mappedGames = topGames
    .map(({ reviews, ...game }) => {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

      return {
        ...game,

        rating: Number((totalRating / reviews.length).toFixed(2)),
      };
    })
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const latestReview = await prisma.review.findFirst({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      content: true,
      rating: true,
      createdAt: true,
      user: {
        select: {
          username: true,
        },
      },
      game: {
        select: {
          title: true,
          slug: true,
          image: true,
        },
      },
    },
  });

  return (
    <>
      <HomeHeader />
      <Features />
      <Wrapper className="lg:flex lg:items-start lg:gap-4">
        <TopGames games={mappedGames} />
        <LatestReview data={latestReview} />
      </Wrapper>
    </>
  );
}
