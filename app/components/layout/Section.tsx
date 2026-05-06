import Wrapper from "./Wrapper";

type Props = { children: React.ReactNode; className?: string; title?: string; wrapperClassName?: string; id?: string };

const Section = ({ children, className, title, wrapperClassName, id }: Props) => {
  return (
    <section className={`${className && className} py-2 md:py-4`} id={id}>
      <Wrapper className={`${wrapperClassName && wrapperClassName} h-full rounded-2xl bg-White p-6 lg:max-w-7xl`}>
        {title && <h2 className="mb-6 text-2xl font-semibold tracking-wide first-letter:uppercase md:mb-8">{title}</h2>}
        {children}
      </Wrapper>
    </section>
  );
};

export default Section;
