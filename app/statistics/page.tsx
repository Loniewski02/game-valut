"use client";
import { useState } from "react";

import { PERIODS } from "../lib/constant";

import { BiCalendar } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import ControlsSection from "../components/shared/layout/ControlsSection";
import SelectButton from "../components/shared/ui/SelectButton";
import Wrapper from "../components/shared/layout/Wrapper";

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
      <section className="py-2 md:py-4">
        <Wrapper className="flex flex-wrap justify-center gap-2 md:gap-5 xl:flex-nowrap xl:justify-between">
          <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
            <div className="w-max justify-self-center rounded-full bg-purple-500/10 p-5">
              <IoLogoGameControllerB className="text-4xl text-purple-500" />
            </div>
            <div className="text-left">
              <h3 className="mb-2 text-lg">Total Games</h3>
              <p className="text-3xl font-medium md:col-start-2">12,411</p>
            </div>
          </div>
          <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
            <div className="w-max justify-self-center rounded-full bg-Yellow/10 p-5">
              <AiFillStar className="text-4xl text-Yellow" />
            </div>
            <div className="text-left">
              <h3 className="mb-2 text-lg">Average Rating</h3>
              <p className="text-3xl font-medium md:col-start-2">8.31</p>
            </div>
          </div>
          <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
            <div className="w-max justify-self-center rounded-full bg-green-500/10 p-5">
              <FaUsers className="text-4xl text-green-500" />
            </div>
            <div className="text-left">
              <h3 className="mb-2 text-lg">Total Reviews</h3>
              <p className="text-3xl font-medium md:col-start-2">331</p>
            </div>
          </div>
          <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
            <div className="w-max justify-self-center rounded-full bg-Primary/10 p-5">
              <BiCalendar className="text-4xl text-Primary" />
            </div>
            <div className="text-left">
              <h3 className="mb-2 text-lg">Years Covered</h3>
              <p className="text-3xl font-medium md:col-start-2">2001-2024</p>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Statistics;
