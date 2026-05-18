import { GENRES, PERIODS, PLATFORMS } from "@/app/lib/constant";
import ControlsSection from "../shared/layout/ControlsSection";
import SelectButton from "../shared/ui/SelectButton";

type Props = {
  platform: string | null;
  genre: string | null;
  period: string | null;
  openedSelect: string | null;
  onPlatform: (value: string | null) => void;
  onGenre: (value: string | null) => void;
  onPeriod: (value: string | null) => void;
  onSelect: (value: string | null) => void;
};

const RankingsControls = ({
  platform,
  genre,
  period,
  openedSelect,
  onGenre,
  onPeriod,
  onPlatform,
  onSelect,
}: Props) => {
  return (
    <ControlsSection title="Rankings" text="The best games of all time, ranked by our community.">
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
      <SelectButton
        text="all time"
        name="period"
        items={PERIODS}
        selected={period}
        onSelect={onPeriod}
        onOpen={onSelect}
        opened={openedSelect}
      />
    </ControlsSection>
  );
};

export default RankingsControls;
