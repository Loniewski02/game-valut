"use client";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  transparent?: boolean;
  className?: string;
  onClick?: () => void;
  link?: boolean;
  href?: string;
};

const Button = ({ transparent, className, children, onClick, link, href }: Props) => {
  const router = useRouter();

  const btnHandler = () => {
    if (href && link) router.push(href);
    else onClick?.();
  };

  return (
    <button
      type="button"
      onClick={btnHandler}
      className={`${transparent ? "border-Gray bg-transparent hover:bg-Gray/20" : "border-transparent bg-Primary hover:bg-PrimaryHover"} ${className && className} flex min-w-max items-center justify-center gap-2 rounded-xl border px-6 py-3 text-15 font-medium text-White transition active:scale-95`}
    >
      {children}
    </button>
  );
};

export default Button;
