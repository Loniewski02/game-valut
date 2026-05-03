"use client";
import { useParams } from "next/navigation";

import Section from "@/app/components/layout/Section";
import Wrapper from "@/app/components/layout/Wrapper";
import GameDetailHeader from "@/app/components/game-details/GameDetailHeader";
import GameDetailAbout from "@/app/components/game-details/GameDetailAbout";
import GameDetailInfo from "@/app/components/game-details/GameDetailInfo";

import { GAMES } from "@/app/utils/constant";

const Game = () => {
  const { slug } = useParams<{ slug: string }>();

  const game = GAMES.find((game) => game.slug === slug);

  return (
    <>
      {game && (
        <>
          <GameDetailHeader data={game} />
          <Wrapper className="lg:flex lg:gap-4">
            <GameDetailInfo data={game} />
            <GameDetailAbout description={game.description} />
          </Wrapper>
          <Section title="community rating">{game.rating}</Section>
          <Section title="Similar Games">nwm</Section>
          <Section title="Reviews" id="reviews">
            nwm
          </Section>
        </>
      )}
      {!game && <p>not found</p>}
    </>
  );
};

export default Game;
