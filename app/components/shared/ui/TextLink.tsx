import Link from "next/link";

type Props = {
  text?: string;
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const TextLink = ({ text, href, children, onClick }: Props) => {
  return (
    <p className="text-13 text-GrayishBlue">
      {text && text + " "}
      <Link href={href} onClick={onClick} className="text-Primary underline transition hover:text-PrimaryHover">
        {children}
      </Link>
    </p>
  );
};

export default TextLink;
