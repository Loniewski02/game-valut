import Link from "next/link";

const LinkBtn = ({
  label,
  children,
  href,
  isFull,
}: {
  label: string;
  isFull: boolean;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`${isFull ? "border-transparent bg-primary hover:bg-primaryHover" : "border-border bg-transparent hover:bg-[#0d11179f]"} block w-44 rounded-md border px-6 py-3 text-center text-15 font-medium text-textDark transition  hover:font-bold active:scale-95`}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
