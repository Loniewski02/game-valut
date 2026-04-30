import { FiPlus } from "react-icons/fi";

const AddGameButton: React.FC<{ classList?: string }> = ({ classList }) => {
  return (
    <button
      className={`${classList ? classList : " "} flex w-max items-center gap-2 rounded-xl border border-transparent bg-Primary px-6 py-3 text-15 font-bold text-White transition hover:bg-PrimaryHover active:scale-95`}
    >
      <FiPlus className="text-xl" />
      Add Game
    </button>
  );
};

export default AddGameButton;
