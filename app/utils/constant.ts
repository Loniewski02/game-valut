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

export const GENRES: string[] = [
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

export const PLATFORMS: string[] = ["PC", "PlayStation", "Xbox", "Nintendo"];

export const PLATFORM_SHORTCUTS: Record<string, string> = {
  pc: "pc",
  playstation: "ps",
  xbox: "xbox",
  nintendo: "ns",
};

export const GAMES: Game[] = [
  {
    id: "1",
    slug: "the-witcher-3-wild-hunt",
    title: "The Witcher 3: Wild Hunt",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["RPG", "Adventure"],
    rating: 9.9,
    image: "",
    releaseDate: "2015-05-19",
    description:
      "An open-world RPG where you play as Geralt of Rivia, a monster hunter searching for his adopted daughter while war consumes the Northern Kingdoms.",
  },
  {
    id: "2",
    slug: "elden-ring",
    title: "Elden Ring",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Action"],
    rating: 9.8,
    image: "",
    releaseDate: "2022-02-25",
    description:
      "A vast fantasy action RPG set in the Lands Between, featuring challenging combat, exploration, and deep character customization.",
  },
  {
    id: "3",
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Shooter"],
    rating: 9.2,
    image: "",
    releaseDate: "2020-12-10",
    description:
      "A futuristic open-world RPG set in Night City where you fight, hack, and survive in a world driven by power and cybernetic upgrades.",
  },
  {
    id: "4",
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Action", "Adventure"],
    rating: 9.7,
    image: "",
    releaseDate: "2018-10-26",
    description:
      "A cinematic western adventure following Arthur Morgan and the Van der Linde gang during the final years of the Wild West.",
  },
  {
    id: "5",
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Strategy"],
    rating: 9.8,
    image: "",
    releaseDate: "2023-08-03",
    description:
      "A party-based RPG inspired by Dungeons & Dragons with turn-based combat, branching stories, and meaningful choices.",
  },
  {
    id: "6",
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    platforms: ["PlayStation"],
    genres: ["Action", "Adventure"],
    rating: 9.6,
    image: "",
    releaseDate: "2022-11-09",
    description:
      "Kratos and Atreus face the coming of Ragnarök in a mythological action adventure filled with emotional storytelling and brutal combat.",
  },
  {
    id: "7",
    slug: "grand-theft-auto-v",
    title: "Grand Theft Auto V",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Action", "Shooter"],
    rating: 9.4,
    image: "",
    releaseDate: "2013-09-17",
    description:
      "An open-world crime sandbox following three criminals in Los Santos with action-packed missions and endless side activities.",
  },
  {
    id: "8",
    slug: "hollow-knight",
    title: "Hollow Knight",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["Action", "Platformer"],
    rating: 9.3,
    image: "",
    releaseDate: "2017-02-24",
    description:
      "A beautifully crafted metroidvania set in a ruined underground kingdom full of secrets, bosses, and precise combat.",
  },
  {
    id: "9",
    slug: "dying-light",
    title: "Dying Light",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Horror", "Action"],
    rating: 8.9,
    image: "",
    releaseDate: "2015-01-27",
    description:
      "A zombie survival action game focused on parkour movement, crafting weapons, and surviving dangerous nights.",
  },
  {
    id: "10",
    slug: "minecraft",
    title: "Minecraft",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["Simulation", "Adventure"],
    rating: 9.5,
    image: "",
    releaseDate: "2011-11-18",
    description:
      "A sandbox building game where players explore, gather resources, craft tools, and create almost anything imaginable.",
  },
  {
    id: "11",
    slug: "resident-evil-4",
    title: "Resident Evil 4",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Horror", "Action"],
    rating: 9.1,
    image: "",
    releaseDate: "2023-03-24",
    description:
      "A survival horror action game where Leon Kennedy rescues the president's daughter from a terrifying cult.",
  },
  {
    id: "12",
    slug: "forza-horizon-5",
    title: "Forza Horizon 5",
    platforms: ["PC", "Xbox"],
    genres: ["Racing", "Sports"],
    rating: 9.0,
    image: "",
    releaseDate: "2021-11-09",
    description: "An open-world racing game set in Mexico featuring hundreds of cars, events, and stunning landscapes.",
  },
  {
    id: "13",
    slug: "the-legend-of-zelda-breath-of-the-wild",
    title: "Zelda: Breath of the Wild",
    platforms: ["Nintendo"],
    genres: ["Adventure", "Action"],
    rating: 9.8,
    image: "",
    releaseDate: "2017-03-03",
    description:
      "A groundbreaking open-world adventure where Link explores Hyrule freely, solves puzzles, and battles powerful enemies.",
  },
  {
    id: "14",
    slug: "stardew-valley",
    title: "Stardew Valley",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    genres: ["Simulation", "RPG"],
    rating: 8.8,
    image: "",
    releaseDate: "2016-02-26",
    description:
      "A relaxing farming RPG where you grow crops, build relationships, mine resources, and restore a rural community.",
  },
];
