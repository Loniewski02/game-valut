import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const ArrowLink: React.FC<{ href: string; txt: string; className?: string }> = ({ href, txt, className }) => {
  return (
    <Link
      href={href}
      className={`${className ? className : ""} mt-4 flex items-center justify-end text-13 font-bold text-primary`}
    >
      {txt}
      <BsArrowRightShort className="text-xl" />
    </Link>
  );
};

export default ArrowLink;
