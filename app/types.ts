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

export type TopGames = {
  id: string;
  img: string;
  title: string;
  rating: number;
};

export type Game = {
  id: string;
  slug: string;
  title: string;
  platforms: string[];
  genres: string[];
  rating: number;
  image: string;
};

export type Feature = { id: string; title: string; desc: string; icon: IconType };
