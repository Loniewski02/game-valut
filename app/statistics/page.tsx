"use client";
import { useState } from "react";

import SelectButton from "../components/ui/SelectButton";
import ControlsSection from "../components/layout/ControlsSection";

import { PERIODS } from "../utils/constant";

const Statistics = () => {
  const [period, setPeriod] = useState<string | null>(null);
  const [opened, setOpened] = useState<string | null>(null);

  const periodHandler = (text: string | null) => {
    setPeriod(text);
  };

  const openedHandler = (name: string | null) => {
    setOpened((prev) => (prev === name ? null : name));
  };

  return (
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
  );
};

export default Statistics;
