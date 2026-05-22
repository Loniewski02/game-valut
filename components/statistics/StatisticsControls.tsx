import { useState } from "react";

import { useFilters } from "@/hooks/useFilters";

import { PERIODS } from "@/utils/constant";

import ControlsSection from "../shared/layout/ControlsSection";
import SelectButton from "../shared/ui/SelectButton";

const StatisticsControls = () => {
  const [openedSelect, setOpenedSelect] = useState<string | null>(null);
  const { searchParams, update } = useFilters();

  const period = searchParams.get("period") ?? "";

  const periodHandler = (value: string | null) => update("period", value);

  const openedSelectHandler = (text: string | null) => {
    setOpenedSelect((prev) => (prev === text ? null : text));
  };

  return (
    <ControlsSection title="statistics" text="Explore comprehensive data and insights from the gaming world.">
      <SelectButton
        text="all time"
        name="period"
        items={PERIODS}
        selected={period}
        onSelect={periodHandler}
        onOpen={openedSelectHandler}
        opened={openedSelect}
      />
    </ControlsSection>
  );
};

export default StatisticsControls;
