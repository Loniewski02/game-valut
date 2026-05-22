import { prisma } from "@/lib/prisma";

export const getHomeData = async () => {
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

  return {
    topGames: mappedGames,
    latestReview,
  };
};
