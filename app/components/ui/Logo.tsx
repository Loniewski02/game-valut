import Link from "next/link";

import { GiBeastEye } from "react-icons/gi";

type Props = {
  ico: string;
  font: string;
  link?: string;
  onClick: () => void;
};

const Logo: React.FC<Props> = ({ ico, font, link, onClick }) => {
  return (
    <Link
      href="/"
      aria-label="home-page"
      onClick={onClick}
      className={`${link ? link : ""} flex items-center gap-4 font-bold`}
    >
      <GiBeastEye className={ico} />
      <span className={`${font}`}>GameBeast</span>
    </Link>
  );
};

export default Logo;
