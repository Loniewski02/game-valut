import Wrapper from "../layout/Wrapper";
import Button from "../ui/Button";
import Plus from "../layout/Plus";
import FormBox from "../ui/FormBox";
import SelectButton from "../ui/SelectButton";

import { GAMES_FILTER_INPUT, GENRES, PLATFORMS } from "@/app/utils/constant";

type Props = {
  platform: string | null;
  genre: string | null;
  openedSelect: string | null;
  onSelect: (text: string | null) => void;
  onPlatform: (text: string | null) => void;
  onGenre: (text: string | null) => void;
  onTitle: (text: string) => void;
  onModal: () => void;
};

const GamesControls = ({ platform, genre, openedSelect, onSelect, onPlatform, onGenre, onTitle, onModal }: Props) => {
  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTitle(event.currentTarget.value);
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
        <div className="overflow relative grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-[1fr,auto,auto] md:grid-rows-1">
          <FormBox input={GAMES_FILTER_INPUT} className="col-span-2 md:col-span-1" />
          <SelectButton
            text="All platforms"
            name="platform"
            items={PLATFORMS}
            selected={platform}
            onSelect={onPlatform}
            onOpen={onSelect}
            opened={openedSelect}
          />
          <SelectButton
            text="all genres"
            name="genre"
            items={GENRES}
            selected={genre}
            onSelect={onGenre}
            onOpen={onSelect}
            opened={openedSelect}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default GamesControls;
