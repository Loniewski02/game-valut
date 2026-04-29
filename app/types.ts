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

export type Game = { id: string; title: string; img: string; rating: number };

export type Feature = { id: string; title: string; desc: string; icon: IconType };
