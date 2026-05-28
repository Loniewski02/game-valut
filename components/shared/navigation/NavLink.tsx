import Link from "next/link";
import { usePathname } from "next/navigation";

import { Route } from "@/types";

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
      className={`${isActive ? "font-bold text-Primary hover:text-PrimaryHover" : "text-DarkGrayishBlue hover:text-PrimaryHover"} group relative flex items-center gap-4 py-2 text-lg transition lg:gap-1 lg:py-0 lg:text-15`}
    >
      <Icon className="text-2xl lg:hidden lg:text-15" />
      <span className="first-letter:uppercase">{data.name}</span>
      <span
        className={`${isActive ? "scale-x-100 bg-Primary" : "scale-x-0"} absolute bottom-0 left-0 right-0 hidden h-[2px] bg-DarkGrayishBlue transition group-hover:scale-x-100  group-hover:bg-PrimaryHover lg:block`}
      />
    </Link>
  );
};

export default NavLink;
