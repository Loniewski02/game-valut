import { MdKeyboardArrowDown } from "react-icons/md";

import Wrapper from "../layout/Wrapper";
import Section from "../layout/Section";
import AddGameButton from "./AddGameButton";
import CategoryButton from "./CategoryButton";

const GamesControls = () => {
  return (
    <Section>
      <Wrapper className="flex flex-col gap-8">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-y-0">
          <h2 className="text-2xl font-bold text-text sm:order-1 sm:col-span-2 sm:text-3xl">Games Library</h2>
          <p className=" text-textSec sm:order-3 sm:col-span-2">This library is built by the community.</p>
          <AddGameButton classList="w-full sm:order-2 sm:w-max sm:place-self-end" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-5 md:grid-rows-1">
          <div className="relative col-span-2 md:col-span-3">
            <label htmlFor="search-game" className="invisible absolute z-10 text-13 text-textSec">
              Search games
            </label>
            <input
              id="search-game"
              type="text"
              name="search-game"
              className="z-20 w-full rounded-xl border border-border bg-card py-3 pl-5 pr-4 text-15 placeholder:text-textSec"
              placeholder="Search games..."
            />
          </div>
          <CategoryButton>Platforms</CategoryButton>
          <CategoryButton>Categories</CategoryButton>
        </div>
      </Wrapper>
    </Section>
  );
};

export default GamesControls;
