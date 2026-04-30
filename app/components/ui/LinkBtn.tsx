import Link from "next/link";

type Props = {
  transparent?: boolean;
  className?: string;
  children: React.ReactNode;
  href: string;
};

const LinkBtn = ({ children, href, transparent, className }: Props) => {
  return (
    <Link
      href={href}
      className={`${transparent ? "border-Gray bg-transparent hover:bg-Gray/20" : "border-transparent bg-Primary hover:bg-PrimaryHover"} ${className && className} min-w-max rounded-xl border px-6 py-3 text-center text-15 font-medium text-White transition active:scale-95`}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
