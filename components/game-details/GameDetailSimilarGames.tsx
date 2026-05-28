import { GamePreview, SimilarGamesType } from "@/types";

import Section from "../shared/layout/Section";
import GameLink from "../games/GameLink";

const GameDetailSimilarGames = ({ games }: { games: SimilarGamesType[] }) => {
  return (
    <>
      {games.length > 0 && (
        <Section title="Similar Games">
          <div className="flex gap-4 overflow-y-hidden pb-2">
            {games.map((item: any) => {
              return <GameLink key={item.id} data={item} className="min-w-60" />;
            })}
          </div>
        </Section>
      )}
    </>
  );
};

export default GameDetailSimilarGames;
