import Image from "next/image";

import { useGameList } from "@/hooks/useGameList";

import { BiTrash } from "react-icons/bi";
import ListButton from "@/components/shared/ui/buttons/ListButton";
import Link from "next/link";

type Status = "PLAYING" | "WANT_TO_PLAY" | "PLAYED";

type Props = {
  game: {
    id: string;
    title: string;
    slug: string;
    image: string;
  };
  isCurrentUser: boolean;
  currentList: Status;
  onUpdate: (gid: string, status: Status | null) => void;
};

const LISTS: Status[] = ["WANT_TO_PLAY", "PLAYING", "PLAYED"];

const LABELS = {
  WANT_TO_PLAY: "Want To Play",
  PLAYING: "Playing",
  PLAYED: "Played",
};

const ListItem = ({ game, currentList, isCurrentUser, onUpdate }: Props) => {
  const { updateList } = useGameList(game.id, currentList);

  const updateHandler = async (status: Status | null) => {
    await updateList(status);

    onUpdate(game.id, status);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border">
      <Image fill src={game.image} alt={game.title} className="object-cover" />
      <div className="absolute inset-0 bg-DarkGrayishBlue/60" />
      <div className="relative z-20 flex h-full flex-col justify-between gap-2 p-4 md:flex-row md:items-center">
        <Link href={game.slug} className="text-lg font-medium text-White transition hover:text-Primary">
          {game.title}
        </Link>
        {isCurrentUser && (
          <div className="flex w-max justify-between gap-2">
            {LISTS.filter((status) => status !== currentList).map((status) => (
              <ListButton key={status} status={status} onClick={() => updateHandler(status)}>
                {LABELS[status]}
              </ListButton>
            ))}
            <ListButton onClick={() => updateHandler(null)}>
              <BiTrash className="text-lg" />
            </ListButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
