"use client";
import { useMemo, useState } from "react";

import { useFetch } from "../hooks/useFetch";

import { RankingItemType } from "../types";
import { GENRES, PLATFORMS, PERIODS } from "../lib/constant";

import { BsController } from "react-icons/bs";
import ControlsSection from "../components/shared/layout/ControlsSection";
import SelectButton from "../components/shared/ui/SelectButton";
import FetchSection from "../components/shared/states/FetchSection";
import EmptySection from "../components/shared/states/EmptySection";
import Button from "../components/shared/ui/Button";
import Section from "../components/shared/layout/Section";
import RankingItem from "../components/rankings/RankingItem";


const Rankings = () => {
  const [platform, setPlatform] = useState<string | null>(null);
  const [genre, setGenre] = useState<string | null>(null);
  const [period, setPeriod] = useState<string | null>(null);
  const [opened, setOpened] = useState<string | null>(null);
  const [listLenght, setListLenght] = useState(10);
  const { data: games, isLoading, error } = useFetch<RankingItemType[]>("/api/rankings");

  const platformHandler = (text: string | null) => {
    setPlatform(text);
  };

  const genreHandler = (text: string | null) => {
    setGenre(text);
  };

  const periodHandler = (text: string | null) => {
    setPeriod(text);
  };

  const openedHandler = (name: string | null) => {
    setOpened((prev) => (prev === name ? null : name));
  };

  const visibleGames = useMemo(() => {
    return games
      .filter((game) => {
        const matchesPlatform = !platform || game.platforms.includes(platform);
        const matchesGenre = !genre || game.genres.includes(genre);
        return matchesPlatform && matchesGenre;
      })
      .sort((a, b) => b.rating - a.rating)
      .slice(0, listLenght);
  }, [games, platform, genre, listLenght]);

  const clearFiltersHandler = () => {
    setPlatform(null);
    setGenre(null);
    setPeriod(null);
    setOpened(null);
  };

  return (
    <>
      <ControlsSection title="Rankings" text="The best games of all time, ranked by our community.">
        <SelectButton
          text="All platforms"
          name="platform"
          items={PLATFORMS}
          selected={platform}
          onSelect={platformHandler}
          onOpen={openedHandler}
          opened={opened}
        />
        <SelectButton
          text="all genres"
          name="genre"
          items={GENRES}
          selected={genre}
          onSelect={genreHandler}
          onOpen={openedHandler}
          opened={opened}
        />
        <SelectButton
          text="all time"
          name="period"
          items={PERIODS}
          selected={period}
          onSelect={periodHandler}
          onOpen={openedHandler}
          opened={opened}
        />
      </ControlsSection>
      <FetchSection isLoading={isLoading} error={error}>
        {visibleGames.length === 0 && (
          <EmptySection
            title="No ranked games yet"
            text="No games have been rated yet. Be the first to rate one."
            Icon={BsController}
            hasFilters={platform || genre}
            onClear={clearFiltersHandler}
          >
            <Button className="mt-6" href="/games" link>
              Browse games
            </Button>
          </EmptySection>
        )}
        {visibleGames.length > 0 && (
          <Section wrapperClassName="flex flex-col gap-4 md:gap-6">
            <div className="relative mb-4 grid grid-cols-[34px,auto,1fr,48px] gap-x-2 pb-4 text-13 uppercase text-GrayishBlue md:grid-cols-[34px,auto,1fr,200px,48px] md:gap-x-4 lg:grid-cols-[42px,auto,1fr,180px,220px,60px] xl:grid-cols-[42px,auto,1fr,200px,300px,60px]">
              <span className="text-center">#</span>
              <span className="col-span-2">game</span>
              <span className="hidden md:block">platform</span>
              <span className="hidden lg:block">genre</span>
              <span>rating</span>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-Gray" />
            </div>
            {visibleGames.map((game, index) => (
              <RankingItem key={game.id} item={game} index={index} />
            ))}
            {listLenght < visibleGames.length && (
              <button
                className="mt-4 w-max self-center px-6 py-2 text-13 font-semibold text-Primary"
                onClick={() => setListLenght((prev) => prev + 10)}
              >
                load more
              </button>
            )}
          </Section>
        )}
      </FetchSection>
    </>
  );
};
// BsController
export default Rankings;
