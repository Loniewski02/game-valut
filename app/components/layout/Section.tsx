type Props = { children: React.ReactNode; className?: string; title?: string };

const Section = ({ children, className, title }: Props) => {
  return (
    <section className={`${className && className} py-6 md:py-8`}>
      {title && (
        <h2 className="mb-4 text-2xl font-semibold uppercase tracking-wide md:text-3xl lg:mb-6 lg:text-2xl">{title}</h2>
      )}
      {children}
    </section>
  );
};

export default Section;
