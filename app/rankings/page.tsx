"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { useFetch } from "../hooks/useFetch";

import { RankingItemType } from "../types";

import { BsController } from "react-icons/bs";
import FetchSection from "../components/shared/states/FetchSection";
import EmptySection from "../components/shared/states/EmptySection";
import Button from "../components/shared/ui/Button";
import Section from "../components/shared/layout/Section";
import RankingItem from "../components/rankings/RankingItem";
import RankingsControls from "../components/rankings/RankingsControls";

const Rankings = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");
  const period = searchParams.get("period") ?? "";

  const { data: games, isLoading, error } = useFetch<RankingItemType[]>(`/api/rankings?${searchParams.toString()}`);
  const [openedSelect, setOpenedSelect] = useState<string | null>(null);

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`);
  };

  const selectHandler = (text: string | null) => {
    setOpenedSelect((prev) => (prev === text ? null : text));
  };

  const platformHandler = (value: string | null) => updateParams("platform", value);
  const genreHandler = (value: string | null) => updateParams("genre", value);
  const periodHandler = (value: string | null) => updateParams("period", value);

  const clearFiltersHandler = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("period");
    params.delete("genre");
    params.delete("platform");

    setOpenedSelect(null);

    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <RankingsControls
        genre={genre}
        platform={platform}
        period={period}
        onGenre={genreHandler}
        onPlatform={platformHandler}
        onPeriod={periodHandler}
        onSelect={selectHandler}
        openedSelect={openedSelect}
      />
      <FetchSection isLoading={isLoading} error={error}>
        {!games || games.length === 0 ? (
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
        ) : (
          <Section wrapperClassName="flex flex-col gap-4 md:gap-6">
            <div className="relative mb-4 grid grid-cols-[34px,auto,1fr,48px] gap-x-2 pb-4 text-13 uppercase text-GrayishBlue md:grid-cols-[34px,auto,1fr,200px,48px] md:gap-x-4 lg:grid-cols-[42px,auto,1fr,180px,220px,60px] xl:grid-cols-[42px,auto,1fr,200px,300px,60px]">
              <span className="text-center">#</span>
              <span className="col-span-2">game</span>
              <span className="hidden md:block">platform</span>
              <span className="hidden lg:block">genre</span>
              <span>rating</span>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-Gray" />
            </div>
            {games.map((game, index) => (
              <RankingItem key={game.id} item={game} index={index} />
            ))}
          </Section>
        )}
      </FetchSection>
    </>
  );
};

export default Rankings;
