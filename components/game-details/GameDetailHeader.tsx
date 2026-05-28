"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { useGameList } from "@/hooks/useGameList";
import { MessagesContext } from "../_providers/MessagesContext";

import { Game } from "@/prisma/generated/client";
import { PLATFORM_SHORTCUTS } from "@/utils/constant";

import { BiHeart, BiTrash } from "react-icons/bi";
import Header from "../shared/layout/Header";
import Hero from "../shared/layout/Hero";
import RatingBadge from "../shared/ui/RatingBadge";
import Badge from "../shared/ui/Badge";
import Button from "../shared/ui/buttons/Button";
import Plus from "../shared/ui/Plus";
import ListButton from "../shared/ui/buttons/ListButton";

type Status = "PLAYING" | "WANT_TO_PLAY" | "PLAYED";

const LISTS: Status[] = ["WANT_TO_PLAY", "PLAYING", "PLAYED"];

const LABELS = {
  WANT_TO_PLAY: "Want To Play",
  PLAYING: "Playing",
  PLAYED: "Played",
};

const GameDetailHeader = ({
  game,
  addedBy,
  rating,
}: {
  game: Game & {
    listStatus: "WANT_TO_PLAY" | "PLAYING" | "PLAYED" | null;
  };
  addedBy: { id: string; username: string; usernameLower: string; favoriteGameId: string | null };
  rating: { average: number | string; count: number };
}) => {
  const router = useRouter();
  const [favoriteGame, setFavoriteGame] = useState(addedBy.favoriteGameId);
  const { setNewMessage } = useContext(MessagesContext);

  const { listStatus, addToList, updateList } = useGameList(game.id, game.listStatus);

  const favouriteGameHandler = async () => {
    try {
      const res = await fetch("/api/games/favorite-game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameId: game.id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setNewMessage(res.status, data.message);
        return;
      }

      setNewMessage(res.status, data.message);
      setFavoriteGame((prev) => (prev === game.id ? null : game.id));
      router.refresh();
    } catch (error) {
      console.error(error);
      setNewMessage(500, "Something went wrong");
    }
  };
  return (
    <Header>
      <Hero width={1200} height={600} alt={`background image of ${game.title}`} src={game.cover} />
      <div className="relative z-20 flex h-max w-full flex-col gap-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-end md:gap-6 lg:gap-10">
        <div className="relative h-48 w-32 overflow-hidden rounded-xl object-cover md:h-72 md:w-44 lg:h-80 lg:w-52">
          <Image src={game.image} alt={`background image of ${game.title}`} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-LightGray md:mb-4 md:text-4xl">{game.title}</h1>
          <div className="flex items-center gap-2 md:mb-4 md:gap-3">
            <button
              onClick={favouriteGameHandler}
              aria-label="Mark as favourite game"
              className="group transition-transform hover:scale-105 active:scale-90"
            >
              <BiHeart
                className={`${favoriteGame && favoriteGame === game.id ? "text-red-600 group-hover:text-red-700" : "text-GrayishBlue group-hover:text-red-300 "} text-3xl transition-colors md:text-4xl`}
              />
            </button>
            {rating.count > 0 && (
              <>
                <RatingBadge
                  rating={rating.average}
                  textClassName="md:text-lg"
                  iconClassName="md:text-2xl"
                  light
                  reversed
                />
                <p className="text-13 text-Gray">{`(${rating.count > 1 ? "ratings" : "rating"})`}</p>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-1 text-LightGray">
            {game.platforms.map((item) => (
              <Badge key={item} item={PLATFORM_SHORTCUTS[item.toLocaleLowerCase()]} uppercase dark />
            ))}
          </div>
          <div className="flex flex-wrap gap-1 text-Primary">
            {game.genres.map((item) => (
              <Badge key={item} item={item} dark />
            ))}
          </div>
          <p className="text-13 text-Gray md:mt-4">
            Added by:{" "}
            <Link href={`/users/${addedBy.username}`} className="text-Primary transition hover:text-PrimaryHover">
              {addedBy.usernameLower}
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <Button className="sm:max-w-56 lg:min-w-56" href="#reviews" link>
            View reviews
          </Button>
          {!listStatus ? (
            <Button onClick={addToList} className="sm:max-w-56 lg:min-w-56" transparent>
              <Plus />
              Add To List
            </Button>
          ) : (
            <div className="flex w-full flex-col justify-between gap-2 self-end lg:flex-row">
              {LISTS.filter((status) => status !== listStatus).map((status) => (
                <ListButton key={status} status={status} onClick={() => updateList(status)}>
                  {LABELS[status]}
                </ListButton>
              ))}
              <ListButton onClick={() => updateList(null)}>
                <BiTrash className="text-lg" />
              </ListButton>
            </div>
          )}
        </div>
      </div>
    </Header>
  );
};

export default GameDetailHeader;
