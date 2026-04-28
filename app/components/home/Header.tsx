import LinkBtn from "../ui/LinkBtn";
import Wrapper from "../layout/Wrapper";

const Header = () => {
  return (
    <header className="sectionX py-6">
      <Wrapper className="section-inner-x relative h-full content-center overflow-hidden rounded-2xl bg-[url('/assets/demoIMG.png')] bg-cover bg-no-repeat pb-14 pt-36">
        <div className=" absolute bottom-0 left-0 right-0 top-0 z-20 bg-[linear-gradient(45deg,_rgba(0,0,0,0.98)_0%,_rgba(0,0,0,0.94)_22%,_rgba(0,0,0,0.78)_42%,_rgba(3,18,52,0.68)_62%,_rgba(12,52,128,0.42)_82%,_rgba(38,92,190,0.16)_100%)]" />
        <div className="relative z-30 flex flex-col gap-4">
          <h1 className="max-w-60 text-4xl font-bold tracking-wide text-textDark md:mb-4 md:text-[40px] md:leading-[1.3] lg:max-w-max lg:text-5xl">
            Your video game hub!
          </h1>
          <p className="max-w-96 text-15 leading-tight text-textSecDark md:max-w-md md:text-base">
            {
              "Rate, search for, and discover new games. Create your own lists, keep track of the games you've played, and browse game rankings and statistics."
            }
          </p>
          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <LinkBtn href="/auth?mode=register" label="sa" isFull>
              Get started
            </LinkBtn>
            <LinkBtn href="/games" label="sa" isFull={false}>
              Browse Games
            </LinkBtn>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
