import { GiBeastEye } from "react-icons/gi";
import Wrapper from "../layout/Wrapper";
import Logo from "../ui/Logo";

const AuthSection = ({ children, txtBig, txt }: { children: React.ReactNode; txtBig?: string; txt?: string }) => {
  return (
    <section className="relative px-6 py-20 ">
      <Wrapper className="relative max-w-[476px] rounded-2xl bg-card p-6 shadow-sm md:p-10">
        <div className="mb-8 mt-4 flex items-center justify-center gap-4 font-bold">
          <GiBeastEye className="text-6xl" />
          <span className="text-3xl">GameBeast</span>
        </div>
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
