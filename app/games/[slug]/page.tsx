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
import GameDetailReviewCard from "@/app/components/games/game-details/GameDetailReviewCard";

import { GAMES, REVIEWS } from "@/app/utils/constant";

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
            {/* <form action="">
              <div>
                <label htmlFor="review" className="sr-only">
                  Your review
                </label>
                <textarea 
                  id="review"
                  rows={4}
                  className="block w-full rounded-2xl border px-2 py-4 text-15"
                  placeholder="Write a review..."
                  required
                />
              </div>
              <div>

              </div>
            </form> */}
            <div className="flex flex-col gap-16 md:p-4 lg:gap-12">
              {REVIEWS.map((item) => (
                <GameDetailReviewCard key={item.id} item={item} />
              ))}
            </div>
          </Section>
        </>
      )}
      {!game && <NotFound />}
    </>
  );
};

export default Game;
