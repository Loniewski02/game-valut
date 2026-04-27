import { Route } from "./types";

import { IoIosPodium } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { CgHomeAlt } from "react-icons/cg";

export const ROUTES: Route[] = [
  { id: "route1", name: "Przegląd", url: "/", icon: CgHomeAlt },
  { id: "route2", name: "Gry", url: "/gry", icon: IoLogoGameControllerB },
  { id: "route4", name: "Rankingi", url: "/rankingi", icon: IoIosPodium },
  { id: "route5", name: "Statystyki", url: "/statystyki", icon: FaRegChartBar },
];
