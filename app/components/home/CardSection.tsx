type Props = { children: React.ReactNode; title: string };

const CardSection = ({ children, title }: Props) => {
  return (
    <section className="py-6 md:py-6 lg:w-1/2 lg:rounded-2xl lg:bg-White lg:px-8 lg:py-6">
      <h2 className="mb-4 text-2xl font-semibold uppercase tracking-wide md:text-3xl lg:mb-6 lg:text-2xl">{title}</h2>
      {children}
    </section>
  );
};

export default CardSection;
