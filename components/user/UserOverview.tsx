import Link from "next/link";

import { BiStar } from "react-icons/bi";
import { BsController } from "react-icons/bs";
import Section from "../shared/layout/Section";
import Wrapper from "../shared/layout/Wrapper";
import Hero from "../shared/layout/Hero";
import RatingBadge from "../shared/ui/RatingBadge";

type Props = {
  favGame: {
    image: string;
    slug: string;
    title: string;
  } | null;
  averageRating: number | string;
  gamesPlayed: number;
};

const UserOverview = ({ favGame, averageRating, gamesPlayed }: Props) => {
  return (
    <Wrapper className="justify-start md:flex md:gap-4">
      <Section title="gaming stats" className="h-max w-full md:w-1/2">
        <div className="flex flex-col gap-4 font-medium lg:text-lg">
          <p className="flex justify-between">
            <span className="flex items-center gap-4">
              <BsController className="text-xl lg:text-2xl" />
              Games Played
            </span>
            <span>{gamesPlayed}</span>
          </p>
          <p className="flex justify-between">
            <span className="flex items-center gap-4">
              <BiStar className="text-xl lg:text-2xl" />
              Average Rating
            </span>
            <span>{averageRating}</span>
          </p>
        </div>
      </Section>
      {favGame && (
        <section className={`w-full py-2 md:w-1/2 md:py-4`}>
          <Wrapper className={`relative h-full overflow-hidden rounded-2xl bg-White p-6 lg:max-w-7xl`}>
            <Hero src={favGame.image} width={400} height={200} alt={favGame.title} />
            <div className="relative z-30 flex h-full w-full flex-col justify-between">
              <h2 className="relative z-20 mb-6 text-2xl font-semibold tracking-wide text-White first-letter:uppercase md:mb-8">
                favorite game
              </h2>
              <div className="relative flex flex-wrap justify-between gap-4 text-white">
                <Link href={`/games/${favGame.slug}}`} className="text-xl font-medium transition hover:text-Primary">
                  {favGame.title}
                </Link>
                <RatingBadge rating={5} reversed light textClassName="text-xl" iconClassName="text-2xl" />
              </div>
            </div>
          </Wrapper>
        </section>
      )}
    </Wrapper>
  );
};

export default UserOverview;
