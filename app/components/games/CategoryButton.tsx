import { MdKeyboardArrowDown } from "react-icons/md";

const CategoryButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <button
      className={`${className ? className : " "} relative z-20 rounded-xl border border-border bg-card px-4 py-3 text-left text-15 text-textSec`}
    >
      {children}
      <MdKeyboardArrowDown className="absolute  right-2 top-1/2 -translate-y-1/2 text-xl" />
    </button>
  );
};

export default CategoryButton;
