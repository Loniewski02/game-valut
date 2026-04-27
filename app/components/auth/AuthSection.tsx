import Wrapper from "../layout/Wrapper";
import Logo from "../ui/Logo";

const AuthSection = ({ children, txtBig, txt }: { children: React.ReactNode; txtBig?: string; txt?: string }) => {
  return (
    <section className="relative px-6 py-20">
      <Wrapper className="relative max-w-[476px] md:rounded-2xl md:bg-card md:p-10 md:shadow-sm">
        <Logo ico="text-7xl" font="text-4xl" link="mb-8 justify-center" />
        <div className="mb-10 flex flex-col gap-2 text-center">
          {txtBig ? <p className="text-2xl font-bold text-text">{txtBig}</p> : ""}
          {txt ? <p className="text-15 text-textSec">{txt}</p> : ""}
        </div>
        {children}
      </Wrapper>
    </section>
  );
};

export default AuthSection;
