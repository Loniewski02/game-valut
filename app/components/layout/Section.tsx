const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className="py-6 md:py-8">{children}</section>;
};

export default Section;
