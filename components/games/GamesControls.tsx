import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";

import { GENRES, PLATFORMS } from "@/utils/constant";

import Wrapper from "../shared/layout/Wrapper";
import Button from "../shared/ui/Button";
import Plus from "../shared/ui/Plus";
import SelectButton from "../shared/ui/SelectButton";

type Props = {
  search: string;
  onSearch: (txt: string) => void;
  onModal: () => void;
};

const GamesControls = ({ search, onSearch, onModal }: Props) => {
  const [openedSelect, setOpenedSelect] = useState<string | null>(null);
  const { searchParams, update } = useFilters();

  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");

  const paltformHandler = (value: string | null) => update("platform", value);
  const genreHandler = (value: string | null) => update("genre", value);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    update("title", search.trim());
  };

  const openedSelectHandler = (text: string | null) => {
    setOpenedSelect((prev) => (prev === text ? null : text));
  };

  return (
    <section className="py-2 md:py-4">
      <Wrapper>
        <div className="mb-8 grid gap-4 sm:grid-cols-3 sm:gap-y-0 md:mb-0">
          <h2 className="text-2xl font-semibold first-letter:uppercase sm:order-1 sm:col-span-2 sm:text-3xl">
            Games Library
          </h2>
          <p className="text-GrayishBlue sm:order-3 sm:col-span-2">This library is built by the community.</p>
          <Button className="sm:order-2 sm:w-max sm:place-self-end" onClick={onModal}>
            <Plus />
            Add Game
          </Button>
        </div>
        <div className="relative grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-[1fr,auto,auto] md:grid-rows-1">
          <form onSubmit={submitHandler} className="relative col-span-2 flex w-full flex-col gap-2 md:col-span-1">
            <label htmlFor="game-title" className="sr-only">
              search by title
            </label>
            <input
              id="game-title"
              type="text"
              value={search}
              onChange={(e) => onSearch(e.currentTarget.value)}
              placeholder="Search games..."
              className="z-20 rounded-xl border border-Gray bg-White py-3 pl-5 pr-4 text-15 text-DarkGrayishBlue placeholder:text-GrayishBlue"
            />
          </form>
          <SelectButton
            text="All platforms"
            name="platform"
            items={PLATFORMS}
            selected={platform}
            onSelect={paltformHandler}
            onOpen={openedSelectHandler}
            opened={openedSelect}
          />
          <SelectButton
            text="All genres"
            name="genre"
            items={GENRES}
            selected={genre}
            onSelect={genreHandler}
            onOpen={openedSelectHandler}
            opened={openedSelect}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default GamesControls;
