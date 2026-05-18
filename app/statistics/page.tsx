"use client";
import { useState } from "react";

import { useFetch } from "../hooks/useFetch";
import { MainStats } from "@/app/types";
import { PERIODS } from "../lib/constant";

import ControlsSection from "../components/shared/layout/ControlsSection";
import SelectButton from "../components/shared/ui/SelectButton";
import FetchSection from "../components/shared/states/FetchSection";
import StatisticsCards from "../components/statistics/StatisticsCards";

const Statistics = () => {
  const [period, setPeriod] = useState<string | null>(null);
  const [opened, setOpened] = useState<string | null>(null);

  const { data, error, isLoading } = useFetch<MainStats>("/api/statistics");

  const periodHandler = (text: string | null) => {
    setPeriod(text);
  };

  const openedHandler = (name: string | null) => {
    setOpened((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <ControlsSection title="statistics" text="Explore comprehensive data and insights from the gaming world.">
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
      <FetchSection error={error} isLoading={isLoading}>
        {data && <StatisticsCards data={data} />}
      </FetchSection>
    </>
  );
};

export default Statistics;
