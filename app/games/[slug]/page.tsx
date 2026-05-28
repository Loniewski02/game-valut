"use client";
import { useFetch } from "@/hooks/useFetch";

import { GameDetailType } from "@/types";

import FetchSection from "@/components/shared/states/FetchSection";
import GameDetailHeader from "@/components/game-details/GameDetailHeader";
import Wrapper from "@/components/shared/layout/Wrapper";
import GameDetailInfo from "@/components/game-details/GameDetailInfo";
import GameDetailAbout from "@/components/game-details/GameDetailAbout";
import GameDetailRating from "@/components/game-details/GameDetailRating";
import GameDetailsScreens from "@/components/game-details/GameDetailsScreens";
import GameDetailsReviews from "@/components/game-details/GameDetailsReviews";
import GameDetailSimilarGames from "@/components/game-details/GameDetailSimilarGames";

const GameDetailPage = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading, error } = useFetch<GameDetailType | null>(`/api/games/${params.slug}`);

  return (
    <FetchSection isLoading={isLoading} error={error}>
      {data && (
        <>
          <GameDetailHeader game={data.game} addedBy={data.addedBy} rating={data.rating} />
          <Wrapper className="justify-start lg:flex lg:gap-4">
            <GameDetailInfo game={data.game} />
            <GameDetailAbout description={data.game.description} />
          </Wrapper>
          {data.rating.count > 0 && <GameDetailRating rating={data.rating} />}
          <GameDetailsScreens screenshots={data.game.screenshots} />
          <GameDetailSimilarGames games={data.similarGames} />
          <GameDetailsReviews gameId={data.game.id} />
        </>
      )}
    </FetchSection>
  );
};

export default GameDetailPage;
