import { Route } from "./types";

import { IoIosPodium } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { CgHomeAlt } from "react-icons/cg";

export const ROUTES: Route[] = [
  { id: "route1", name: "Home", url: "/", icon: CgHomeAlt },
  { id: "route2", name: "Games", url: "games", icon: IoLogoGameControllerB },
  { id: "route4", name: "Rankings", url: "/rankings", icon: IoIosPodium },
  { id: "route5", name: "Statistics", url: "/statistics", icon: FaRegChartBar },
];
