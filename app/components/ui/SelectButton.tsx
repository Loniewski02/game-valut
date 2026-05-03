import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  text: String;
  name: string;
  items: string[] | null | undefined;
  selected: string | null;
  className?: string;
  onSelect: (text: string | null) => void;
  onOpen: (text: string | null) => void;
  opened: string | null;
};

const SelectButton = ({ name, className, text, items, onSelect, selected, onOpen, opened }: Props) => {
  const listHandler = () => {
    onOpen(name);
  };

  const selectHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(event.currentTarget.name);
    if (selected === event.currentTarget.name) {
      onSelect(null);
    }
    onOpen(null);
  };

  const clearHandler = () => {
    onSelect(null);
    onOpen(null);
  };

  return (
    <div className="relative ">
      <button
        onClick={listHandler}
        name={name}
        className={`${className ? className : " "} ${!selected ? "text-GrayishBlue hover:text-DarkGrayishBlue" : "font-bold text-Primary"} relative z-20 flex w-full min-w-32 items-center justify-between gap-2 rounded-xl border border-Gray bg-White py-3 pl-4 pr-2 text-left text-15`}
      >
        <span className="first-letter:uppercase">{!selected ? text : selected}</span>
        <MdKeyboardArrowDown
          className={`${name == opened ? "rotate-180 text-Primary" : "rotate-0 text-DarkGrayishBlue"} text-xl  transition`}
        />
      </button>
      <div
        className={`${name == opened ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} opacity-1 absolute -bottom-3 left-0 right-0 z-30 flex translate-y-full flex-col rounded-xl border border-Gray bg-White p-4 transition`}
      >
        <button
          onClick={clearHandler}
          name="clear"
          className={`text-semibold mb-2 border-b border-Gray py-1 text-left text-15 uppercase text-red-300 transition hover:text-red-600`}
        >
          clear
        </button>
        {items &&
          items.map((item) => {
            return (
              <button
                key={item}
                name={item}
                onClick={selectHandler}
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

export default SelectButton;
