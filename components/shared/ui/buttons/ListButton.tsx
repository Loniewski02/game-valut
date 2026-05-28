type Props = {
  children: React.ReactNode;
  status?: "WANT_TO_PLAY" | "PLAYING" | "PLAYED" | null;
  onClick: () => void;
};

const STATUS_CLASSES = {
  WANT_TO_PLAY: "border-blue-500 bg-blue-500/10 hover:bg-blue-500/30 text-blue-500",
  PLAYING: "border-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/30 text-yellow-500",
  PLAYED: "border-green-500 bg-green-500/10 hover:bg-green-500/30 text-green-500 ",
};

const ListButton = ({ status, onClick, children }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full min-w-max items-center justify-center rounded-md border px-2 py-2 text-13 font-medium transition hover:scale-105 active:scale-95 sm:max-w-56 lg:max-w-none ${!status ? "border-red-500 bg-red-500/10 text-red-500 hover:bg-red-500/30" : STATUS_CLASSES[status]}`}
    >
      {children}
    </button>
  );
};

export default ListButton;
