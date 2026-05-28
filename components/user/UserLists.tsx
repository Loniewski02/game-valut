import { useEffect, useState } from "react";

import { useFetch } from "@/hooks/useFetch";

import { GameLists } from "@/types";

import Section from "../shared/layout/Section";
import Wrapper from "../shared/layout/Wrapper";
import ListItem from "./ListItem";
import FetchSection from "../shared/states/FetchSection";

const SECTIONS = [
  {
    id: "wantToPlay",
    title: "Want To Play",
  },
  {
    id: "playing",
    title: "Playing",
  },

  {
    id: "played",
    title: "Played",
  },
] as const;

const UserLists = ({ username, isCurrentUser }: { username: string; isCurrentUser: boolean }) => {
  const [lists, setLists] = useState<GameLists | null>(null);
  const { data, isLoading, error } = useFetch<GameLists>(`/api/games/lists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
    }),
  });

  useEffect(() => {
    if (data) {
      setLists(data);
    }
  }, [data]);

  const updateListHandler = (gameId: string, status: "WANT_TO_PLAY" | "PLAYING" | "PLAYED" | null) => {
    if (!lists || !isCurrentUser) return;

    const allGames = [...lists.wantToPlay, ...lists.playing, ...lists.played];
    const currentGame = allGames.find((item) => item.game.id === gameId);

    if (!currentGame) return;

    const cleanedLists = {
      wantToPlay: lists.wantToPlay.filter((item) => item.game.id !== gameId),
      playing: lists.playing.filter((item) => item.game.id !== gameId),
      played: lists.played.filter((item) => item.game.id !== gameId),
    };

    if (status === null) {
      setLists(cleanedLists);
      return;
    }

    const updatedGame = {
      ...currentGame,
      status: status,
    };

    if (status === "WANT_TO_PLAY") {
      cleanedLists.wantToPlay.unshift(updatedGame);
    }
    if (status === "PLAYING") {
      cleanedLists.playing.unshift(updatedGame);
    }
    if (status === "PLAYED") {
      cleanedLists.played.unshift(updatedGame);
    }

    setLists(cleanedLists);
  };

  return (
    <FetchSection error={error} isLoading={isLoading}>
      {lists && (
        <Wrapper className="max-w-screen-2xl lg:flex lg:flex-wrap lg:justify-center lg:gap-4 ">
          {SECTIONS.map((section) => (
            <Section
              key={section.id}
              className="h-max w-full lg:w-[49%] 2xl:w-[32%]"
              wrapperClassName="flex flex-col gap-2"
              title={section.title}
            >
              {lists[section.id].map((item) => (
                <ListItem
                  key={item.id}
                  game={item.game}
                  isCurrentUser={isCurrentUser}
                  onUpdate={updateListHandler}
                  currentList={item.status}
                />
              ))}
            </Section>
          ))}
        </Wrapper>
      )}
    </FetchSection>
  );
};

export default UserLists;
