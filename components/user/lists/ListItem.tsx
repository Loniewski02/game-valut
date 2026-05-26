import Image from "next/image";

const ACTIONS = {
  Playing: ["Want To Play", "Completed"],
  "Want To Play": ["Playing", "Completed"],
  Completed: ["Playing", "Want To Play"],
};

type Props = {
  game: {
    id: string;
    title: string;
    image: string;
  };
  currentList: "Playing" | "Want To Play" | "Completed";
};

const ListItem = ({ game, currentList }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border">
      <Image fill src={game.image} alt={game.title} className="object-cover" />
      <div className="absolute inset-0 bg-DarkGrayishBlue/60" />
      <div className="relative z-20 flex h-full items-center justify-between p-4">
        <p className="text-lg font-medium text-White">{game.title}</p>
        <div className="flex flex-wrap gap-2">
          {ACTIONS[currentList].map((status) => (
            <button
              key={status}
              onClick={() => {}}
              className="rounded-xl border px-4 py-2 text-sm font-medium text-White transition hover:border-Primary hover:bg-Primary"
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
