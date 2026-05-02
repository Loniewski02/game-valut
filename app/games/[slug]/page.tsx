"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import RatingBadge from "@/app/components/layout/RatingBadge";

import Section from "@/app/components/layout/Section";
import Wrapper from "@/app/components/layout/Wrapper";
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
        <>
          <Header>
            <Hero width={800} height={400} alt=";" src={"/assets/hero.jpg"} />
            <div className="relative z-20 flex w-full flex-col gap-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-end md:gap-6 lg:gap-10">
              <Image
                width={100}
                height={200}
                alt=";"
                src={"/assets/cover.jpg"}
                className="w-32 rounded-xl object-cover md:w-48 lg:w-56"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold text-LightGray md:mb-4 md:text-4xl">{game.title}</h1>
                <div className="flex items-center gap-2 md:mb-4 md:gap-3">
                  <RatingBadge
                    rating={game.rating}
                    textClassName="md:text-lg"
                    iconClassName="md:text-2xl"
                    light
                    reversed
                  />
                  <p className="text-13 text-Gray">(2,341 ratings)</p>
                </div>
                <div className="flex gap-1">
                  {game?.platforms.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-Gray/20 px-2 py-1 text-13 uppercase tracking-tighter text-LightGray"
                    >
                      {PLATFORM_SHORTCUTS[item.toLocaleLowerCase()]}
                    </span>
                  ))}
                </div>
                <div className="flex gap-1">
                  {game.genres.map((item) => (
                    <span key={item} className="rounded-md bg-Gray/20 px-2 py-1 text-13 tracking-tighter text-Primary">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-13 text-Gray md:mt-4">Release Date: {game.releaseDate}</p>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <Button className="sm:max-w-56 lg:min-w-56">
                  <Plus />
                  Add Review
                </Button>
                <Button className="sm:max-w-56 lg:min-w-56" transparent>
                  <Plus />
                  Add To List
                </Button>
              </div>
            </div>
          </Header>
          <Wrapper className="lg:flex lg:gap-4">
            <Section className="order-2 lg:w-1/3">
              <ul className="text-15">
                <li>w</li>
                <li>wa</li>
                <li>was</li>
                <li>wasd</li>
              </ul>
            </Section>
            <Section title="about" className="order-1 lg:w-2/3">
              <p className="text-15">{game.description}</p>
            </Section>
          </Wrapper>
          <Section title="community rating">{game.rating}</Section>
          <Section title="Similar Games">nwm</Section>
          <Section title="Reviews">nwm</Section>
        </>
      )}
      {!game && <p>not found</p>}
    </>
  );
};

export default Game;
