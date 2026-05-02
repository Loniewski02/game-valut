import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  name: string;
  className?: string;
  items: string[] | null | undefined;
  selected: string | null;
  onSelect: (platform: string | null) => void;
};

const GamesControlsList = ({ name, className, items, onSelect, selected }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const platformHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(event.currentTarget.value);
    if (selected === event.currentTarget.value) {
      onSelect(null);
    }
    setIsOpened(false);
  };

  const closeListHandler = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        onClick={closeListHandler}
        value={name}
        className={`${className ? className : " "} ${!selected ? "text-GrayishBlue hover:text-DarkGrayishBlue" : "font-bold text-Primary"} relative z-20 w-full rounded-xl border border-Gray bg-White px-4 py-3 text-left text-15 first-letter:uppercase `}
      >
        {!selected ? name : selected}
        <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-DarkGrayishBlue" />
      </button>
      <div
        className={`${isOpened ? "visible" : "invisible"} opacity-1 absolute -bottom-3 left-0 right-0 z-30 flex translate-y-full flex-col rounded-xl border border-Gray bg-White p-4`}
      >
        <button
          onClick={platformHandler}
          className={`text-semibold mb-2 border-b border-Gray py-1 text-left text-15 uppercase text-red-300 transition hover:text-red-600`}
        >
          clear
        </button>
        {items &&
          items.map((item) => {
            return (
              <button
                key={item}
                value={item}
                onClick={platformHandler}
                className={`${selected === item && "font-bold text-Primary"} py-1 text-left text-15 transition hover:text-Primary`}
              >
                {item}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default GamesControlsList;
