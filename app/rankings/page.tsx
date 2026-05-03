"use client";
import { useState } from "react";

import SelectButton from "../components/ui/SelectButton";
import ControlsSection from "../components/layout/ControlsSection";

import { GENRES, PLATFORMS, PERIODS } from "../utils/constant";

const Rankings = () => {
  const [platform, setPlatform] = useState<string | null>(null);
  const [genre, setGenre] = useState<string | null>(null);
  const [period, setPeriod] = useState<string | null>(null);
  const [opened, setOpened] = useState<string | null>(null);

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

  return (
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
  );
};

export default Rankings;
