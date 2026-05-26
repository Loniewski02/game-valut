"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useFetch } from "@/hooks/useFetch";

import { ReviewType } from "@/types";

import Section from "../shared/layout/Section";
import ReviewCard from "./review/ReviewCard";
import FetchSection from "../shared/states/FetchSection";
import ReviewsForm from "./review/ReviewsForm";
import PaginationButton from "../shared/ui/buttons/PaginationButton";

const GameDetailsReviews = ({ gameId }: { gameId: string }) => {
  const { data: session } = useSession();
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error } = useFetch<ReviewType[]>(`/api/games/reviews?page=${page}&limit=${limit}`, {
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
    if (!data) return;

    if (page === 1) {
      setReviews(data);
    } else {
      setReviews((prev) => [...prev, ...data]);
    }
  }, [data]);

  const newReviewHandler = (rev: ReviewType) => {
    setReviews((prev) => [rev, ...prev]);
  };

  const reviewd = !!session && reviews.some((review) => review.userId === session.user.id);

  const hideReviewHandler = (rid: string) => {
    setReviews((prev) => prev.filter((item) => item.id !== rid));
  };

  const pageHandler = () => setPage((prev) => prev + 1);

  return (
    <>
      <FetchSection isLoading={isLoading} error={error}>
        <Section title="Reviews" id="reviews" wrapperClassName="relative">
          {!reviewd && <ReviewsForm gameId={gameId} onNewReview={newReviewHandler} />}
          {reviews && reviews.length > 0 ? (
            <div>
              <div className="flex flex-col gap-16 rounded-2xl md:p-4 lg:gap-12 lg:bg-LightGray/40 lg:p-6">
                {reviews.map((item) => (
                  <ReviewCard
                    key={item.id}
                    item={item}
                    postedBy={item.user}
                    byCurrentUser={session?.user.id === item.userId}
                    onDelete={hideReviewHandler}
                  />
                ))}
              </div>
              {data && data.length === limit && <PaginationButton onClick={pageHandler} />}
            </div>
          ) : (
            <p className="text-center text-GrayishBlue">
              No reviews yet. Be the first one to rate and review this game!
            </p>
          )}
        </Section>
      </FetchSection>
    </>
  );
};

export default GameDetailsReviews;
