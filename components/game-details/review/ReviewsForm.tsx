"use client";
import { useContext, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { FormAddReviewAction } from "@/lib/queries/reviews";

import { AiFillStar } from "react-icons/ai";
import Submit from "../../shared/ui/Submit";
import { ReviewType } from "@/types";
import { MessagesContext } from "../../_providers/MessagesContext";

const initialState = {
  message: "",
  status: null,
};

const ReviewsForm = ({ gameId, onNewReview }: { gameId: string; onNewReview: (rev: ReviewType) => void }) => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [state, action] = useFormState(FormAddReviewAction, initialState);
  const { setNewMessage } = useContext(MessagesContext);

  useEffect(() => {
    if (state.status && state.message) {
      setNewMessage(state.status, state.message);
      router.refresh();
    }
  }, [state]);

  useEffect(() => {
    if (state.data) {
      onNewReview(state.data);
    }
  }, [state.data]);

  return (
    <form action={action}>
      <div className="mb-10 flex flex-col gap-4">
        <label htmlFor="review" className="sr-only">
          Your review
        </label>
        <textarea
          id="review"
          name="review"
          className="block max-h-96 min-h-48 w-full rounded-2xl border p-4 text-15 outline-none focus:border-DarkGrayishBlue"
          placeholder="Write a review..."
          required
        />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button key={value} type="button" onClick={() => setRating(value)} className="transition hover:scale-110">
                <AiFillStar className={`text-3xl ${value <= rating ? "text-Yellow" : "text-Gray"}`} />
              </button>
            ))}
          </div>
          <Submit>Add review</Submit>
        </div>
        <input type="hidden" name="rating" value={rating} />
        <input type="hidden" name="gameId" value={gameId} />
      </div>
    </form>
  );
};

export default ReviewsForm;
