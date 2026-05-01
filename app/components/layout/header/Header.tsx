import Wrapper from "../Wrapper";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="py-6 lg:py-8 ">
      <Wrapper className="relative overflow-hidden rounded-2xl px-6 pb-14 pt-36 md:px-8 lg:px-14">{children}</Wrapper>
    </header>
  );
};

export default Header;
