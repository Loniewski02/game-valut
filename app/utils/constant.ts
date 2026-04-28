import { IoIosPodium } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { CgHomeAlt } from "react-icons/cg";

import { Route } from "../types";

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
  { id: "route1", name: "Home", url: "/", icon: CgHomeAlt },
  { id: "route2", name: "Games", url: "games", icon: IoLogoGameControllerB },
  { id: "route4", name: "Rankings", url: "/rankings", icon: IoIosPodium },
  { id: "route5", name: "Statistics", url: "/statistics", icon: FaRegChartBar },
];

export const FEATURES = [
  { id: "feature1", title: "Add Games", desc: "", img: "" },
  { id: "feature2", title: "", desc: "", img: "" },
  { id: "feature3", title: "", desc: "", img: "" }
];
