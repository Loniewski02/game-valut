import { Game } from "@/app/types";
import Section from "../layout/Section";

const Box = ({ label, value }: { label: string; value: string | string[] }) => {
  return (
    <div className="flex justify-between gap-4 text-15">
      <p className="font-medium">{label}</p>
      <p className="text-right text-13">{Array.isArray(value) ? value.join(", ") : value}</p>
    </div>
  );
};

const GameDetailInfo = ({ data }: { data: Game }) => {
  return (
    <Section className="order-2 lg:w-2/5" wrapperClassName="flex flex-col gap-4">
      <Box label="Developer:" value={data.developer} />
      <Box label="Publisher:" value={data.publisher} />
      <Box label="Release Date:" value={data.releaseDate} />
      <Box label="Genres:" value={data.genres} />
      <Box label="Platforms:" value={data.platforms} />
      <Box label="Game Modes:" value={data.gameModes} />
      <Box label="ESRB:" value={data.esrb} />
    </Section>
  );
};

export default GameDetailInfo;
