import Link from "next/link";

import { GiBeastEye } from "react-icons/gi";

type Props = {
  linkStyle?: string;
  onClick?: () => void;
};

const Logo = ({ linkStyle, onClick }: Props) => {
  return (
    <Link
      href="/"
      aria-label="home-page"
      onClick={onClick}
      className={`${linkStyle ? linkStyle : ""} flex items-center gap-4 font-semibold text-DarkGrayishBlue`}
    >
      <GiBeastEye className="text-4xl" />
      <span className="text-xl">GameBeast</span>
    </Link>
  );
};

export default Logo;
