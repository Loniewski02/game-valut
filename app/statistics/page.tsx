"use client";
import { useState } from "react";
import { BiCalendar } from "react-icons/bi";

import SelectButton from "../components/ui/SelectButton";
import ControlsSection from "../components/layout/ControlsSection";
import Wrapper from "../components/layout/Wrapper";

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
      <section>
        <Wrapper>
          <div className="grid w-full grid-rows-[auto,auto,auto] justify-center gap-6 rounded-xl bg-White p-6 text-center">
            <div className="w-max justify-self-center rounded-full bg-Primary/20 p-4">
              <BiCalendar className="text-5xl" />
            </div>
            <h3 className="text-lg font-semibold">Total Games</h3>
            <p className="text-4xl">12,321</p>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Statistics;
