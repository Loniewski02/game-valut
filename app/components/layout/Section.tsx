type Props = { children: React.ReactNode };

const Section = ({ children }: Props) => {
  return <section className="py-6 md:py-8">{children}</section>;
};

export default Section;
