import { IconType } from "react-icons";

import Section from "../layout/Section";
import Button from "../ui/Button";



type Props = {
  Icon: IconType;
  title: string;
  text: string;
  hasFilters?: string | null;
  onClear?: () => void;
  children?: React.ReactNode;
};

const EmptySection = ({ Icon, title, text, children, hasFilters, onClear }: Props) => {
  return (
    <Section wrapperClassName="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center md:py-24">
      <div className="mb-6 rounded-full bg-LightGray p-6">
        <Icon className="text-5xl text-Primary" />
      </div>
      <p className="text-3xl font-bold text-DarkGrayishBlue">{hasFilters ? "No results found" : title}</p>
      <p className="max-w-96 text-15 text-GrayishBlue">{hasFilters ? "Try changing your filters." : text}</p>
      {hasFilters ? (
        <Button className="mt-6" onClick={onClear}>
          Clear filters
        </Button>
      ) : (
        children
      )}
    </Section>
  );
};

export default EmptySection;
