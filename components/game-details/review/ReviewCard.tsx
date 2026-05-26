import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { MessagesContext } from "../../_providers/MessagesContext";

import { dateFormatterToNow } from "@/utils/helpers";
import { ReviewType } from "@/types";

import { AiFillStar } from "react-icons/ai";
import ReviewEdit from "./ReviewEdit";
import ReviewControls from "./ReviewControls";
import Link from "next/link";

type Props = {
  item: ReviewType;
  onDelete: (rid: string) => void;
  byCurrentUser: boolean;
  postedBy: { username: string; usernameLower: string; image: string; id: string };
};

const ReviewCard = ({ item, byCurrentUser, postedBy, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [rating, setRating] = useState(item.rating);
  const [content, setContent] = useState(item.content);
  const [isHidden, setIsHidden] = useState(false);

  const { setNewMessage } = useContext(MessagesContext);
  const router = useRouter();

  const deleteReviewHandler = async () => {
    try {
      const res = await fetch("/api/games/reviews/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId: item.id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setNewMessage(res.status, data.message);
        return;
      }
      onDelete(item.id);
      setNewMessage(res.status, data.message);
    } catch (error) {
      console.error(error);
      setNewMessage(500, "Something went wrong");
    }
  };

  const saveReviewHandler = async () => {
    try {
      if (item.content === content && item.rating === rating) {
        setNewMessage(400, "Nothing has changed");
        return;
      }
      const res = await fetch("/api/games/reviews/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId: item.id,
          editedContent: content,
          editedRating: rating,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setNewMessage(res.status, data.message);
        return;
      }

      setIsEditing(false);
      setNewMessage(res.status, data.message);
      router.refresh();
    } catch (error) {
      console.error(error);

      setNewMessage(500, "Something went wrong");
    }
  };

  const toggleEditHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleHideReviewHandler = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="group relative grid grid-cols-[48px,1fr,auto] gap-3 md:grid-cols-[56px,1fr,auto] md:gap-6 md:gap-y-0 lg:grid-cols-[64px,164px,1fr,164px]">
      {!isHidden && (
        <>
          <Link href={`/users${postedBy.usernameLower}`}>
            <Image
              src={postedBy.image}
              alt="profile picture"
              width={60}
              height={60}
              className="h-12 w-12 rounded-full border-[2px] border-Gray object-cover md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
          </Link>
          <div className="flex flex-col md:gap-2">
            <Link
              href={`/users/${postedBy.usernameLower}`}
              className="font-semibold transition hover:text-Primary md:text-lg"
            >
              {postedBy.username}
            </Link>
            <span className="col-start-2 text-13 text-GrayishBlue">{dateFormatterToNow(item.createdAt)}</span>
          </div>
        </>
      )}
      <div className="relative flex flex-col items-end sm:flex-row sm:items-center sm:gap-4 md:place-self-start lg:col-start-4 lg:justify-self-end">
        {!isHidden && (
          <div className="order-2 flex w-max items-center gap-1 sm:order-1">
            <AiFillStar className="order-1 text-xl text-Yellow md:text-3xl" />
            <span className="order-2 min-w-5 text-base md:text-lg">{rating}/5</span>
          </div>
        )}
        <ReviewControls
          byCurrentUser={byCurrentUser}
          onHide={toggleHideReviewHandler}
          onEdit={toggleEditHandler}
          onDelete={deleteReviewHandler}
          isHidden={isHidden}
        />
      </div>
      {!isHidden &&
        (!isEditing ? (
          <p className="col-span-3 text-15 leading-relaxed md:col-span-2 md:col-start-2 md:text-base lg:col-span-1 lg:col-start-3 lg:row-start-1">
            {content}
          </p>
        ) : (
          <ReviewEdit
            content={content}
            rating={rating}
            onContent={setContent}
            onRating={setRating}
            onSave={saveReviewHandler}
          />
        ))}
      <div className="absolute -bottom-8 left-0 right-0 h-px bg-Gray group-last:hidden lg:-bottom-6" />
    </div>
  );
};

export default ReviewCard;
