import { GAMES } from "./lib/constant";

import Features from "./components/home/Features";
import HomeHeader from "./components/home/HomeHeader";
import LatestReview from "./components/home/LatestReview";
import TopGames from "./components/home/TopGames";
import Wrapper from "./components/shared/layout/Wrapper";

export default function Home() {
  const topGames = [...GAMES].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <>
      <HomeHeader />
      <Features />
      <Wrapper className="lg:flex lg:items-start lg:gap-4">
        <TopGames games={topGames} />
        <LatestReview data={GAMES[0]} />
      </Wrapper>
    </>
  );
}
