import Wrapper from "./Wrapper";

type Props = {
  title: string;
  text: string;
  children: React.ReactNode;
};

const ControlsSection = ({ title, text, children }: Props) => {
  return (
    <section className="py-2 md:py-4">
      <Wrapper>
        <div className="grid gap-4 md:grid-cols-6 md:items-end md:gap-y-1">
          <h2 className="text-2xl font-semibold first-letter:uppercase sm:text-3xl md:col-span-2">{title}</h2>
          <p className="text-15 text-GrayishBlue md:col-span-2 md:row-start-2">{text}</p>
          <div className="flex flex-col gap-2 md:col-span-4 md:row-span-2 md:row-start-1 md:flex-row md:justify-end">
            {children}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ControlsSection;
