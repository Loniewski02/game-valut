import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

type Props = { href: string; txt: string; className?: string };

const ArrowLink = ({ href, txt, className }: Props) => {
  return (
    <Link
      href={href}
      className={`${className ? className : ""} mt-4 flex items-center justify-end text-13 font-semibold text-Primary transition hover:text-PrimaryHover`}
    >
      {txt}
      <BsArrowRightShort className="text-xl" />
    </Link>
  );
};

export default ArrowLink;
