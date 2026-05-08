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
import Button from "@/app/components/ui/Button";

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
          <Section title="Reviews" id="reviews" wrapperClassName="relative">
            <form action="">
              <div className="mb-10 flex flex-col gap-4">
                <label htmlFor="review" className="sr-only">
                  Your review
                </label>
                <textarea
                  id="review"
                  className="block max-h-96 min-h-48 w-full rounded-2xl rounded-t-2xl border p-4 text-15 outline-none focus:border-DarkGrayishBlue active:border-DarkGrayishBlue md:min-h-min"
                  placeholder="Write a review..."
                  required
                />
                <div className="self-end">
                  <Button>Add review</Button>
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-16 rounded-2xl md:p-4 lg:gap-12 lg:bg-LightGray/40 lg:p-6">
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
