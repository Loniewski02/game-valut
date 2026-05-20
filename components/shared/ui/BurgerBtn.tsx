import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
  isShown: boolean;
};

const barClasses = "block w-full h-[3px] bg-DarkGrayishBlue rounded-sm absolute left-0";

const BurgerBtn = ({ onClick, isShown }: Props) => {
  return (
    <button aria-label="menu-button" onClick={onClick} className="z-50 p-2 md:hidden">
      <span className="relative block h-[23px] w-6 ">
        <motion.span
          animate={{
            y: isShown ? 10 : 0,
            rotate: isShown ? 45 : 0,
          }}
          className={`${barClasses} top-0`}
        />
        <motion.span
          animate={{ opacity: isShown ? 0 : 1 }}
          className={`${barClasses} top-1/2 -translate-y-1/2 transform`}
        />
        <motion.span
          animate={{
            y: isShown ? -10 : 0,
            rotate: isShown ? -45 : 0,
          }}
          className={`${barClasses} bottom-0`}
        />
      </span>
    </button>
  );
};

export default BurgerBtn;
