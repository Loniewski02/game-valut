import { BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Header from "./components/home/Header";
import Wrapper from "./components/layout/Wrapper";
import Link from "next/link";

const GAMES = [
  { id: "1", img: "none", title: "Elden Ring", rating: 9.6 },
  { id: "2", img: "none", title: "The Witcher 3", rating: 8.7 },
  { id: "3", img: "none", title: "Baldur's Gate 3", rating: 9.4 },
  { id: "4", img: "none", title: "Cyberpunk 2077", rating: 9.1 },
  { id: "5", img: "none", title: "Dying Light", rating: 9.9 },
];

export default function Home() {
  const sortedGames = [...GAMES].sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Header />
      <section className="sectionX sectionY">
        <Wrapper className="section-inner-x section-inner-y rounded-2xl bg-card">
          <h2 className="mb-6 text-center text-2xl font-bold uppercase md:text-left md:text-3xl">
            Top games this week
          </h2>
          <div>
            {sortedGames.map((game, index) => (
              <div key={game.id} className="mb-2 flex justify-between border-b pb-2 text-15 font-bold text-text">
                <div className="flex items-center gap-3">
                  <span className="mr-5 w-2">{index + 1}.</span>
                  <span className="block h-8 w-12 rounded-md bg-red" />
                  <span>{game.title}</span>
                </div>
                <span className="flex items-center gap-2 text-primary">
                  {game.rating}
                  <AiFillStar className="text-xl" />
                </span>
              </div>
            ))}
            <Link href="/rankings" className="mt-4 flex items-center justify-end text-13 font-bold text-primary">
              View full ranking
              <BsArrowRightShort className="text-xl" />
            </Link>
          </div>
        </Wrapper>
      </section>
      <section className="sectionX sectionY">
        <Wrapper className="section-inner-x section-inner-y rounded-2xl bg-card">
          <h2 className="mb-6 text-center text-2xl font-bold uppercase md:text-left md:text-3xl">Latest review</h2>
          <div className="flex items-center justify-between gap-4">
            <div className="h-28 min-w-28 rounded-lg bg-red" />
            <div className="flex flex-col gap-2 text-text">
              <p className="text-justify text-13">
                "Amazing story, unforgettable characters and the best RPG experience."
              </p>
              <p className="flex items-center justify-between text-15 font-bold text-primary">
                The Wither 3{" "}
                <span className="flex items-center gap-2 text-primary">
                  9.9
                  <AiFillStar className="text-xl" />
                </span>
              </p>
              <p className="text-15 text-textSec">
                <span className="text-13">by</span>
                {" Gracz123 "}
                <span className="text-13 ">2h ago</span>
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
