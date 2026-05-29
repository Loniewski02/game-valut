import { Review } from "@/prisma/generated/client";
import { IconType } from "react-icons";

export type Route = {
  id: string;
  name: string;
  url: string;
  icon: IconType;
};

export type Input = {
  type: React.HTMLInputTypeAttribute;
  id: string;
  label: string;
  name: string;
  placeholder: string;
};

export type Feature = { id: string; title: string; desc: string; icon: IconType };

export type GamePreview = {
  id: string | number;
  slug: string;
  title: string;
  rating: number;
  image: string;
  genres: string[];
  platforms: string[];
};

export type RankingItemType = {
  id: string | number;
  slug: string;
  title: string;
  rating: number;
  image: string;
  genres: string[];
  platforms: string[];
  releaseDate: Date;
};

export type MainStats = {
  totalGames: number;
  averageRating: number;
  totalReviews: number;
  yearsCovered: string;
};

export type RegisterData = {
  message: string | null;
  status: number | null;
  data: { username: string; email: string; password: string; password2: string };
};

export type LatestReviewType = {
  content: string;
  rating: number;
  createdAt: Date;
  user: {
    username: string;
  };
  game: {
    title: string;
    slug: string;
    image: string;
  };
};

export type TopGamesType = {
  rating: number;
  image: string;
  title: string;
  id: string;
  slug: string;
}[];

export type UserProfileType = {
  id: string;
  username: string;
  usernameLower: string;
  image: string;
  email: string;
  backgroundImage: string;
  description: string;
  createdAt: string;
  favoriteGame: {
    title: string;
    slug: string;
    image: string;
  } | null;
  reviewsCount: number;
  addedGamesCount: number;
  averageRating: number;
  listCount: number;
  lists: {
    id: string;
  }[];
  addedGames: {
    id: string;
    title: string;
    slug: string;
    image: string;
  }[];
};

export type ReviewType = {
  user: { username: string; image: string; usernameLower: string; id: string };
} & Review;

import { Game, GameStatus } from "@/prisma/generated/client";

export type SimilarGamesType = {
  similarGames: {
    id: string;
    title: string;
    slug: string;
    image: string;
    platforms: string[];
    genres: string[];
    rating: number;
    similarity: number;
  }[];
};

export type GameDetailType = {
  similarGames: SimilarGamesType[];
  game: Game & {
    listStatus: GameStatus | null;
  };
  addedBy: {
    id: string;
    username: string;
    usernameLower: string;
    favoriteGameId: string | null;
  };
  rating: {
    average: number | string;
    count: number;
    distribution: {
      rating: number;
      count: number;
    }[];
  };
  similarGamesType: SimilarGamesType;
};

export type ListItem = {
  game: { id: string; title: string; slug: string; image: string };
  createdAt: Date;
  gameId: string;
  id: string;
  status: "PLAYING" | "WANT_TO_PLAY" | "PLAYED";
  userId: string;
};

export type GameLists = {
  wantToPlay: ListItem[] | [];
  playing: ListItem[] | [];
  played: ListItem[] | [];
};
