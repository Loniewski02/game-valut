import Link from "next/link";

type Props = {
  text?: string;
  href: string;
  children: React.ReactNode;
};

const TextLink: React.FC<Props> = ({ text, href, children }) => {
  return (
    <p className="text-13 text-GrayishBlue">
      {text && text + " "}
      <Link href={href} className="text-Primary underline transition hover:text-PrimaryHover">
        {children}
      </Link>
    </p>
  );
};

export default TextLink;
