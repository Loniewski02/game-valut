import { BiSad } from "react-icons/bi";
import Section from "./Section";

type Props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

const ErrorSection = ({ title, text, children }: Props) => {
  return (
    <Section wrapperClassName="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center md:py-24">
      <div className="mb-6 rounded-full bg-LightGray p-6">
        <BiSad className="text-5xl text-Primary" />
      </div>
      <p className="text-5xl font-bold text-DarkGrayishBlue">{title}</p>
      <p className="max-w-96 text-lg text-GrayishBlue">{text}</p>
      {children}
    </Section>
  );
};

export default ErrorSection;
