import { useEffect, useState } from "react";

import { useFetch } from "@/hooks/useFetch";

import { formatDistanceToNow } from "date-fns";

import { BiSad } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Section from "../shared/layout/Section";
import EmptySection from "../shared/states/EmptySection";
import FetchSection from "../shared/states/FetchSection";
import PaginationButton from "../shared/ui/buttons/PaginationButton";

type Review = {
  id: string;
  rating: number;
  content: string;
  createdAt: Date;
  game: { title: string };
};

const UserReviews = ({ username }: { username: string }) => {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState<Review[] | []>([]);
  const limit = 5;
  const { data, isLoading, error } = useFetch<Review[]>(`/api/${username}/reviews?page=${page}&limit=${limit}`);

  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setReviews(data);
    } else {
      setReviews((prev) => [...prev, ...data]);
    }
  }, [data]);

  const pageHandler = () => setPage((prev) => prev + 1);

  return (
    <FetchSection isLoading={isLoading} error={error}>
      {reviews &&
        (reviews.length > 0 ? (
          <Section>
            <div className="flex flex-col rounded-2xl md:p-4 lg:gap-2 lg:bg-LightGray/40 lg:p-6">
              {reviews.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 border-b border-Gray py-8 first:pt-0 last:border-none last:pb-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold md:text-xl">{item.game.title}</h3>
                      <span className="mt-1 text-13 text-GrayishBlue">
                        Reviewed {formatDistanceToNow(item.createdAt)} ago
                      </span>
                    </div>
                    <div className="flex w-max items-center gap-1 md:place-self-start lg:col-start-4 lg:justify-self-end">
                      <AiFillStar className="order-1 text-xl text-Yellow md:text-2xl" />
                      <span className="order-2 min-w-5 text-base md:text-lg">{item.rating}/5</span>
                    </div>
                  </div>
                  <p className="max-w-3xl leading-relaxed text-DarkGrayishBlue">{item.content}</p>
                </div>
              ))}
            </div>
            {data && data.length === limit && <PaginationButton onClick={pageHandler} />}
          </Section>
        ) : (
          <EmptySection Icon={BiSad} title="No reviews found" text="This user has no reviews" />
        ))}
    </FetchSection>
  );
};

export default UserReviews;
