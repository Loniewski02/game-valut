"use client";
import { useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useFilters } from "@/hooks/useFilters";

import { RankingItemType } from "../../types";

import { BsController } from "react-icons/bs";
import FetchSection from "../../components/shared/states/FetchSection";
import EmptySection from "../../components/shared/states/EmptySection";
import Button from "../../components/shared/ui/buttons/Button";
import Section from "../../components/shared/layout/Section";
import RankingItem from "../../components/rankings/RankingItem";
import RankingsControls from "../../components/rankings/RankingsControls";
import PaginationButton from "@/components/shared/ui/buttons/PaginationButton";

const Rankings = () => {
  const { searchParams, clear } = useFilters();
  const [page, setPage] = useState(1);

  const limit = 10;

  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");
  const period = searchParams.get("period");

  const { data, isLoading, error } = useFetch<RankingItemType[]>(
    `/api/rankings?${searchParams.toString()}&page=${page}&limit=${limit}`,
  );

  const [games, setGames] = useState<RankingItemType[] | []>([]);

  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setGames(data);
    } else {
      setGames((prev) => [...prev, ...data]);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [platform, genre, period]);

  const clearFiltersHandler = () => {
    clear(["period", "genre", "platform"]);
  };

  const pageHandler = () => setPage((prev) => prev + 1);

  return (
    <>
      <RankingsControls />
      <FetchSection isLoading={isLoading} error={error}>
        {games &&
          (games.length > 0 ? (
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
              {data && data.length === limit && <PaginationButton onClick={pageHandler} />}
            </Section>
          ) : (
            <EmptySection
              title="No ranked games yet"
              text="No games have been rated yet. Be the first to rate one."
              Icon={BsController}
              hasFilters={platform || genre || period}
              onClear={clearFiltersHandler}
            >
              <Button className="mt-6" href="/games" link>
                Browse games
              </Button>
            </EmptySection>
          ))}
      </FetchSection>
    </>
  );
};

export default Rankings;
