import { useState } from "react";

import { useFilters } from "@/hooks/useFilters";

import { GENRES, PERIODS, PLATFORMS } from "@/utils/constant";

import ControlsSection from "../shared/layout/ControlsSection";
import SelectButton from "../shared/ui/buttons/SelectButton";

const RankingsControls = () => {
  const [openedSelect, setOpenedSelect] = useState<string | null>(null);
  const { searchParams, update } = useFilters();

  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");
  const period = searchParams.get("period") ?? "";

  const openedSelectHandler = (text: string | null) => {
    setOpenedSelect((prev) => (prev === text ? null : text));
  };

  const platformHandler = (value: string | null) => update("platform", value);
  const genreHandler = (value: string | null) => update("genre", value);
  const periodHandler = (value: string | null) => update("period", value);

  return (
    <ControlsSection title="Rankings" text="The best games of all time, ranked by our community.">
      <SelectButton
        text="All platforms"
        name="platform"
        items={PLATFORMS}
        selected={platform}
        onSelect={platformHandler}
        onOpen={openedSelectHandler}
        opened={openedSelect}
      />
      <SelectButton
        text="all genres"
        name="genre"
        items={GENRES}
        selected={genre}
        onSelect={genreHandler}
        onOpen={openedSelectHandler}
        opened={openedSelect}
      />
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

export default RankingsControls;
