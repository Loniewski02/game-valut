"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import RatingBadge from "@/app/components/layout/RatingBadge";

import Button from "@/app/components/ui/Button";
import Plus from "@/app/components/layout/Plus";
import Hero from "@/app/components/layout/Hero";
import Header from "@/app/components/layout/header/Header";

import { GAMES, PLATFORM_SHORTCUTS } from "@/app/utils/constant";

const Game = () => {
  const { slug } = useParams<{ slug: string }>();

  const game = GAMES.find((game) => game.slug === slug);

  return (
    <>
      {game && (
        <Header>
          <Hero width={600} height={300} alt=";" src={"/assets/hero.jpg"} />
          <div className="relative z-20 flex flex-col gap-2">
            <Image width={100} height={50} alt=";" src={"/assets/cover.jpg"} className="rounded-xl" />
            <h1 className="text-xl font-semibold text-White">{game.title}</h1>
            <RatingBadge rating={game.rating} light reversed />
            <div className="flex gap-1">
              {game?.platforms.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-Gray/20 px-2 py-1 text-13 uppercase tracking-tighter text-White"
                >
                  {PLATFORM_SHORTCUTS[item.toLocaleLowerCase()]}
                </span>
              ))}
            </div>
            <div className="flex gap-1">
              {game.genres.map((item) => (
                <span key={item} className="rounded-md bg-Gray/15 px-2 py-1 text-13 tracking-tighter text-Primary">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-13 text-Gray">Release Date: {game.releaseDate}</p>
            <Button className="max-w-56">
              <Plus />
              Add Review
            </Button>
            <Button className="max-w-56" transparent>
              <Plus />
              Add To List
            </Button>
          </div>
        </Header>
      )}
      {!game && <p>not found</p>}
    </>
  );
};

export default Game;
