import Wrapper from "./Wrapper";

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  txt?: string;
  wrapperClassName?: string;
  id?: string;
};

const Section = ({ children, className, txt, title, wrapperClassName, id }: Props) => {
  return (
    <section className={`${className && className} py-2 md:py-4`} id={id}>
      <Wrapper className={`${wrapperClassName && wrapperClassName} h-full rounded-2xl bg-White p-6 lg:max-w-7xl`}>
        {(title || txt) && (
          <div className="mb-4 md:mb-6">
            {title && <h2 className="mb-2 text-2xl font-semibold tracking-wide first-letter:uppercase">{title}</h2>}
            {txt && <p className="text-15 text-GrayishBlue first-letter:uppercase">{txt}</p>}
          </div>
        )}
        {children}
      </Wrapper>
    </section>
  );
};

export default Section;
