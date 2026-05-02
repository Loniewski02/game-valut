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

export type Game = {
  id: string;
  slug: string;
  title: string;
  platforms: string[];
  genres: string[];
  rating: number;
  imageFull: string;
  imageSmall: string;
  releaseDate: string;
  description: string;
  developer: string;
  publisher: string;
  gameModes: string[];
  esrb: string;
};

export type Feature = { id: string; title: string; desc: string; icon: IconType };
