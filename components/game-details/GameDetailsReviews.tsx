"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useFetch } from "@/hooks/useFetch";

import { ReviewType } from "@/types";

import Section from "../shared/layout/Section";
import ReviewCard from "./ReviewCard";
import FetchSection from "../shared/states/FetchSection";
import ReviewsForm from "./ReviewsForm";

const GameDetailsReviews = ({ gameId }: { gameId: string }) => {
  const { data: session } = useSession();
  const { data, isLoading, error } = useFetch<ReviewType[]>("/api/games/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gameId,
    }),
  });

  const [reviews, setReviews] = useState<ReviewType[]>([]);
  useEffect(() => {
    if (data) {
      setReviews(data);
    }
  }, [data]);

  const newReviewHandler = (rev: ReviewType) => {
    setReviews((prev) => [rev, ...prev]);
  };

  const reviewd = !!session && reviews.some((review) => review.userId === session.user.id);

  return (
    <>
      <FetchSection isLoading={isLoading} error={error}>
        <Section title="Reviews" id="reviews" wrapperClassName="relative">
          {!reviewd && <ReviewsForm gameId={gameId} onNewReview={newReviewHandler} />}
          {reviews && reviews.length > 0 && (
            <div className="flex flex-col gap-16 rounded-2xl md:p-4 lg:gap-12 lg:bg-LightGray/40 lg:p-6">
              {reviews.map((item) => (
                <ReviewCard key={item.id} item={item} postedBy={item.user} />
              ))}
            </div>
          )}
          {reviews && reviews.length === 0 && (
            <p className="text-DarkGrayishBlue">No reviews yet. Be the first one to rate and review this game!</p>
          )}
        </Section>
      </FetchSection>
    </>
  );
};

export default GameDetailsReviews;
