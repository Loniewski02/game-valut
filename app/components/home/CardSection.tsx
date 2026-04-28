const CardSection: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => {
  return (
    <section className="py-6 md:py-6 lg:w-1/2 lg:rounded-xl lg:bg-card lg:px-8 lg:py-6">
      <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl lg:text-xl">{title}</h2>
      {children}
    </section>
  );
};

export default CardSection;
