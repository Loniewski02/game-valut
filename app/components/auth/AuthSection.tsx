import Wrapper from "../layout/Wrapper";

type Props = { children: React.ReactNode; txtBig?: string; txt?: string };

const AuthSection = ({ children, txtBig, txt }: Props) => {
  return (
    <section className="py-20">
      <Wrapper className="max-w-[476px] rounded-2xl bg-White px-6 py-14 shadow-sm md:p-10">
        <div className="mb-10 text-center">
          {txtBig ? <p className="mb-2 text-2xl font-semibold">{txtBig}</p> : ""}
          {txt ? <p className="text-15 text-GrayishBlue">{txt}</p> : ""}
        </div>
        {children}
      </Wrapper>
    </section>
  );
};

export default AuthSection;
