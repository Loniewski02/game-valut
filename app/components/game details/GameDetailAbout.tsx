import Section from "../layout/Section";

const GameDetailAbout = ({ description }: { description: string }) => {
  return (
    <Section title="about" className="order-1 lg:w-3/5">
      <p className="text-15">{description}</p>
    </Section>
  );
};

export default GameDetailAbout;
