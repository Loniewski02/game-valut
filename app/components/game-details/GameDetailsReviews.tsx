import { prisma } from "@/app/lib/prisma";

import Section from "../shared/layout/Section";
import Button from "../shared/ui/Button";
import ReviewCard from "./ReviewCard";


const GameDetailsReviews = async ({ gameId }: { gameId: string }) => {
  const reviews = await prisma.review.findMany({
    where: {
      gameId: gameId,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return (
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
      {reviews && reviews.length > 0 && (
        <div className="flex flex-col gap-16 rounded-2xl md:p-4 lg:gap-12 lg:bg-LightGray/40 lg:p-6">
          {reviews.map((item) => (
            <ReviewCard key={item.id} item={item} postedBy={item.user.username} />
          ))}
        </div>
      )}
      {reviews && reviews.length === 0 && (
        <p className="text-DarkGrayishBlue">No reviews yet. Be the first one to rate and review this game!</p>
      )}
    </Section>
  );
};

export default GameDetailsReviews;
