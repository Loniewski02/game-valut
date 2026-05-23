import { AiFillStar } from "react-icons/ai";
import { IoMdAddCircle, IoIosPodium } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { CgHomeAlt } from "react-icons/cg";

import { Feature, Route } from "@/types";
import { BsController } from "react-icons/bs";

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
    id: "identifier",
    name: "identifier",
    placeholder: "Username or email",
    type: "text",
    label: "Username or email",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Password",
    type: "password",
    label: "Password",
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

export const ADD_GAME_INPUT = {
  id: "query",
  name: "query",
  placeholder: "Game title ...",
  type: "text",
  label: "game title",
};

export const ROUTES: Route[] = [
  { id: "route1", name: "home", url: "/", icon: CgHomeAlt },
  { id: "route2", name: "games", url: "/games", icon: BsController },
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
  "Puzzle",
  "Platformer",
  "Fighting",
  "Indie",
];

export const PLATFORMS: string[] = ["PC", "PlayStation", "Xbox", "Nintendo"];

export const PLATFORM_SHORTCUTS: Record<string, string> = {
  pc: "pc",
  playstation: "ps",
  xbox: "xbox",
  nintendo: "ns",
};

export const PERIODS = ["Weekly", "Monthly", "Yearly"];
