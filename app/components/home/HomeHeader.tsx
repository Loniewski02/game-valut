import Header from "../layout/Header";
import Hero from "../layout/Hero";
import Button from "../ui/Button";

const HomeHeader = () => {
  return (
    <Header>
      <Hero width={1000} height={500} alt=";" src={"/assets/hero.png"} main />
      <div className="relative z-30">
        <h1 className="mb-4 max-w-60 text-4xl font-semibold tracking-wide text-White md:mb-4 md:text-[40px] md:leading-[1.3] lg:max-w-max lg:text-5xl">
          Your video game hub!
        </h1>
        <p className="max-w-96 text-15 leading-tight text-LightGray md:max-w-md md:text-base">
          {
            "Rate, search for, and discover new games. Create your own lists, keep track of the games you've played, and browse game rankings and statistics."
          }
        </p>
        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <Button href="/auth?mode=register" className="max-w-56" link>
            Get Started
          </Button>
          <Button href="/games" className="max-w-56" link transparent>
            Browse Games
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default HomeHeader;
