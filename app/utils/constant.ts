import { AiFillStar } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosPodium } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { CgHomeAlt } from "react-icons/cg";

import { Feature, Game, Route } from "../types";

export const emailReg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGISTER_INPUTS = [
  {
    id: "name",
    name: "username",
    placeholder: "Enter your username",
    type: "text",
    label: "Username",
  },
  {
    id: "email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
  },
  {
    id: "password2",
    name: "password2",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
  },
];

export const LOGIN_INPUTS = [
  {
    id: "email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email Address",
    validity: (val: string) => emailReg.test(val),
  },
  {
    id: "password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
    validity: (val: string) => val.trim().length > 8,
  },
];

export const RESET_INPUT = {
  id: "email",
  name: "email",
  placeholder: "Enter your email",
  type: "email",
  label: "Email Address",
  validity: (val: string) => emailReg.test(val),
};

export const TOP_GAMES = [
  { id: "1", img: "none", title: "Elden Ring", rating: 9.6 },
  { id: "2", img: "none", title: "The Witcher 3: Wild Hunt", rating: 8.7 },
  { id: "3", img: "none", title: "Baldur's Gate 3", rating: 9.4 },
  { id: "4", img: "none", title: "Cyberpunk 2077", rating: 9.1 },
  { id: "5", img: "none", title: "Dying Light", rating: 9.9 },
];

export const ROUTES: Route[] = [
  { id: "route1", name: "home", url: "/", icon: CgHomeAlt },
  { id: "route2", name: "games", url: "/games", icon: IoLogoGameControllerB },
  { id: "route4", name: "rankings", url: "/rankings", icon: IoIosPodium },
  { id: "route5", name: "statistics", url: "/statistics", icon: FaRegChartBar },
];

export const FEATURES: Feature[] = [
  {
    id: "feature1",
    title: "Add Games",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    icon: IoMdAddCircle,
  },
  {
    id: "feature2",
    title: "Rate Games",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    icon: AiFillStar,
  },
  {
    id: "feature3",
    title: "Build Lists",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    icon: IoIosPodium,
  },
];

export const GAME_GENRES: string[] = [
  "Action",
  "Adventure",
  "RPG",
  "Shooter",
  "Strategy",
  "Simulation",
  "Sports",
  "Racing",
  "Horror",
  "Souls-like",
];

export const GAME_PLATFORMS: string[] = ["PC", "PlayStation", "Xbox", "Nintendo"];

export const GAMES: Game[] = [
  {
    id: "1",
    slug: "the-witcher-3-wild-hunt",
    title: "The Witcher 3: Wild Hunt",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["RPG", "Adventure"],
    rating: 9.9,
    image: "",
  },
  {
    id: "2",
    slug: "elden-ring",
    title: "Elden Ring",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Action"],
    rating: 9.8,
    image: "",
  },
  {
    id: "3",
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Shooter"],
    rating: 9.2,
    image: "",
  },
  {
    id: "4",
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Action", "Adventure"],
    rating: 9.7,
    image: "",
  },
  {
    id: "5",
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Strategy"],
    rating: 9.8,
    image: "",
  },
  {
    id: "6",
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    platforms: ["PlayStation"],
    genres: ["Action", "Adventure"],
    rating: 9.6,
    image: "",
  },
  {
    id: "7",
    slug: "grand-theft-auto-v",
    title: "Grand Theft Auto V",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Action", "Shooter"],
    rating: 9.4,
    image: "",
  },
  {
    id: "8",
    slug: "hollow-knight",
    title: "Hollow Knight",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["Action", "Platformer"],
    rating: 9.3,
    image: "",
  },
  {
    id: "9",
    slug: "dying-light",
    title: "Dying Light",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Horror", "Action"],
    rating: 8.9,
    image: "",
  },
  {
    id: "10",
    slug: "minecraft",
    title: "Minecraft",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["Simulation", "Adventure"],
    rating: 9.5,
    image: "",
  },
  {
    id: "11",
    slug: "resident-evil-4",
    title: "Resident Evil 4",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Horror", "Action"],
    rating: 9.1,
    image: "",
  },
  {
    id: "12",
    slug: "forza-horizon-5",
    title: "Forza Horizon 5",
    platforms: ["PC", "Xbox"],
    genres: ["Racing", "Sports"],
    rating: 9.0,
    image: "",
  },
  {
    id: "13",
    slug: "the-legend-of-zelda-breath-of-the-wild",
    title: "Zelda: Breath of the Wild",
    platforms: ["Nintendo"],
    genres: ["Adventure", "Action"],
    rating: 9.8,
    image: "",
  },
  {
    id: "14",
    slug: "stardew-valley",
    title: "Stardew Valley",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["Simulation", "RPG"],
    rating: 8.8,
    image: "",
  },
];
