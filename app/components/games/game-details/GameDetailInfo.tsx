import { Game } from "@/app/generated/prisma/client";
import Section from "../../layout/Section";
import { dateFormatter } from "@/app/functions";

const Box = ({ label, value }: { label: string; value: string | string[] | null }) => {
  return (
    <>
      {value && (
        <div className="flex justify-between gap-4 text-15">
          <p className="min-w-max font-medium">{label}</p>
          <p className="text-right text-13">{Array.isArray(value) ? value.join(", ") : value}</p>
        </div>
      )}
    </>
  );
};

const GameDetailInfo = ({ game }: { game: Game }) => {
  return (
    <Section className="order-2 h-min lg:w-2/5" wrapperClassName="flex flex-col gap-4">
      <Box label="Developer:" value={game.developer} />
      <Box label="Publisher:" value={game.publisher} />
      <Box label="Release Date:" value={dateFormatter(game.releaseDate)} />
      <Box label="Genres:" value={game.genres} />
      <Box label="Platforms:" value={game.platforms} />
      <Box label="Game Modes:" value={game.modes} />
      <Box label="ESRB:" value={game.esrb} />
    </Section>
  );
};

export default GameDetailInfo;
