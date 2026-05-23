import { getHomeData } from "@/lib/queries/home";

import Features from "../components/home/Features";
import HomeHeader from "../components/home/HomeHeader";
import LatestReview from "../components/home/LatestReview";
import TopGames from "../components/home/TopGames";
import Wrapper from "../components/shared/layout/Wrapper";

const HomePage = async () => {
  const { topGames, latestReview } = await getHomeData();

  return (
    <>
      <HomeHeader />
      <Features />
      <Wrapper className="lg:flex lg:items-start lg:gap-4">
        {topGames.length > 0 && <TopGames games={topGames} />}
        <LatestReview data={latestReview} />
      </Wrapper>
    </>
  );
};

export default HomePage;
