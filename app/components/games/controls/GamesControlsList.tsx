import { BiCheck } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  name: string;
  className?: string;
  items: string[];
  selected: string[];
  opened: string | null;
  onFilter: (platform: string) => void;
  onOpen: (name: string | null) => void;
};

const GamesControlsList: React.FC<Props> = ({ name, className, items, onFilter, selected, onOpen, opened }) => {
  const listHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onOpen(event.currentTarget.value);
    if (opened === event.currentTarget.value) {
      onOpen(null);
    }
  };

  const platformHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onFilter(event.currentTarget.value);
  };

  const isOpened = opened?.toLocaleLowerCase() === name.toLocaleLowerCase();

  return (
    <div className="relative">
      <button
        onClick={listHandler}
        value={name}
        className={`${className ? className : " "} relative z-20 w-full rounded-xl border border-border bg-card px-4 py-3 text-left text-15 text-textSec first-letter:uppercase hover:text-text`}
      >
        {name}
        <MdKeyboardArrowDown className="absolute  right-2 top-1/2 -translate-y-1/2 text-xl" />
      </button>
      <div
        className={`${isOpened ? "visible" : "invisible"} absolute -bottom-3 right-0 flex translate-y-full flex-col rounded-xl border border-border bg-card p-4`}
      >
        {items.map((item) => {
          const isSelected = selected.includes(item);
          return (
            <button
              key={item}
              value={item}
              onClick={platformHandler}
              className={`${isSelected ? "font-bold text-primary" : "text-text"} flex items-center gap-4 py-1 text-15 transition hover:text-primary`}
            >
              <span className={`${isSelected ? "border-primary" : "border-text"} relative h-4 w-4 rounded-sm border `}>
                {isSelected && (
                  <BiCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-primary" />
                )}
              </span>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GamesControlsList;
