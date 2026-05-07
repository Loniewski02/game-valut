"use client";
import { useParams } from "next/navigation";

import Section from "@/app/components/layout/Section";
import Wrapper from "@/app/components/layout/Wrapper";
import NotFound from "@/app/not-found";
import GameDetailHeader from "@/app/components/games/game-details/GameDetailHeader";
import GameDetailInfo from "@/app/components/games/game-details/GameDetailInfo";
import GameDetailAbout from "@/app/components/games/game-details/GameDetailAbout";
import GameDetailSimilarGames from "@/app/components/games/game-details/GameDetailSimilarGames";
import GameDetailRating from "@/app/components/games/game-details/GameDetailRating";

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
          <GameDetailRating rating={game.rating} />
          <GameDetailSimilarGames game={game} />
          <Section title="Reviews" id="reviews">
            nwm
          </Section>
        </>
      )}
      {!game && <NotFound />}
    </>
  );
};

export default Game;
