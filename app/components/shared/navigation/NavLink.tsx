import Link from "next/link";
import { usePathname } from "next/navigation";

import { Route } from "@/app/types";

type Props = { data: Route; onClick?: () => void };

const NavLink = ({ data, onClick }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === data.url;
  const Icon = data.icon;

  return (
    <Link
      key={data.id}
      href={data.url}
      aria-label={data.name}
      onClick={onClick}
      className={`${isActive ? "font-bold text-Primary hover:text-PrimaryHover" : "text-DarkGrayishBlue hover:text-PrimaryHover"} group relative flex items-center gap-4 py-2 text-lg transition md:gap-1 md:py-0 md:text-15`}
    >
      <Icon className="text-2xl md:hidden" />
      <span className="first-letter:uppercase">{data.name}</span>
      <span
        className={`${isActive ? "scale-x-100 bg-Primary" : "scale-x-0"} absolute bottom-0 left-0 right-0 hidden h-[2px] bg-DarkGrayishBlue transition group-hover:scale-x-100  group-hover:bg-PrimaryHover md:block`}
      />
    </Link>
  );
};

export default NavLink;
