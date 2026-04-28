import Header from "./components/home/Header";
import Wrapper from "./components/layout/Wrapper";
import LinkTxt from "./components/home/ArrowLink";
import CardSection from "./components/home/CardSection";
import CardSectionGame from "./components/home/CardSectionGame";
import CardSectionReview from "./components/home/CardSectionReview";
import Features from "./components/home/Features";

import { TOP_GAMES } from "./utils/constant";

export default function Home() {
  const sortedGames = [...TOP_GAMES].sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Header />
      <main className="px-6 md:px-8">
        <Features />
        <Wrapper className="max-w-lg lg:flex lg:max-w-7xl lg:items-start lg:gap-4 lg:py-8">
          <CardSection title="top games this week">
            {sortedGames.map((game, index) => (
              <CardSectionGame key={game.id} game={game} index={index} />
            ))}
            <LinkTxt href="/statistics" txt="View full ranking" />
          </CardSection>
          <CardSection title="latest review">
            <CardSectionReview />
          </CardSection>
        </Wrapper>
      </main>
    </>
  );
}
