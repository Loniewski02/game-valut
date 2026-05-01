import Wrapper from "../../layout/Wrapper";
import Section from "../../layout/Section";
import Button from "../../ui/Button";
import Plus from "../../layout/Plus";
import GamesControlsList from "./GamesControlsList";

import { GENRES, PLATFORMS } from "@/app/utils/constant";

type Props = {
  onSelectedPlatform: (platform: string | null) => void;
  onSelectedGenre: (genre: string | null) => void;
  onFilteredName: (name: string) => void;
  selectedPlatoform: string | null;
  selectedGenre: string | null;
  filteredName: string;
};

const GamesControls = ({
  onSelectedPlatform,
  onSelectedGenre,
  selectedPlatoform,
  selectedGenre,
  onFilteredName,
  filteredName,
}: Props) => {
  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilteredName(event.target.value);
  };

  return (
    <Section>
      <Wrapper className="flex flex-col gap-8">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-y-0">
          <h2 className="text-2xl font-semibold sm:order-1 sm:col-span-2 sm:text-3xl">Games Library</h2>
          <p className="text-GrayishBlue sm:order-3 sm:col-span-2">This library is built by the community.</p>
          <Button className="sm:order-2 sm:w-max sm:place-self-end">
            <Plus />
            Add Game
          </Button>
        </div>
        <div className="relative grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-5 md:grid-rows-1">
          <div className="relative col-span-2 md:col-span-3">
            <label htmlFor="search-game" className="invisible absolute z-10 text-13 text-GrayishBlue">
              Search games
            </label>
            <input
              id="search-game"
              type="text"
              name="search-game"
              value={filteredName}
              className="z-20 w-full rounded-xl border border-Gray bg-White py-3 pl-5 pr-4 text-15 placeholder:text-GrayishBlue"
              placeholder="Search games..."
              onChange={nameHandler}
            />
          </div>
          <GamesControlsList
            onSelect={onSelectedPlatform}
            selected={selectedPlatoform}
            items={PLATFORMS}
            name="Platform"
          />
          <GamesControlsList onSelect={onSelectedGenre} selected={selectedGenre} items={GENRES} name="Genre" />
        </div>
      </Wrapper>
    </Section>
  );
};

export default GamesControls;
