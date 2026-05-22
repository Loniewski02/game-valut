"use client";
import { useFetch } from "../../hooks/useFetch";

import { MainStats } from "@/types";

import FetchSection from "../../components/shared/states/FetchSection";
import StatisticsCards from "../../components/statistics/StatisticsCards";
import StatisticsControls from "@/components/statistics/StatisticsControls";
import { useFilters } from "@/hooks/useFilters";

const Statistics = () => {
  const { searchParams } = useFilters();

  const { data, error, isLoading } = useFetch<MainStats>(`/api/statistics?${searchParams.toString()}`);

  return (
    <>
      <StatisticsControls />
      <FetchSection error={error} isLoading={isLoading}>
        {data && <StatisticsCards data={data} />}
      </FetchSection>
    </>
  );
};

export default Statistics;
