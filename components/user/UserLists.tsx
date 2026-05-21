import Image from "next/image";

import Section from "../shared/layout/Section";
import Wrapper from "../shared/layout/Wrapper";

const games = [
  {
    id: "playing-1",
    title: "Cyberpunk 2077",
    image: "/assets/witcher-3-cover.jpg",
  },
];

const UserLists = () => {
  return (
    <Wrapper className="xl:flex xl:justify-start xl:gap-4">
      <Section className="w-full" title="playing" txt="currently active">
        <div>
          {games.map((game) => (
            <div key={game.id} className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg">
                <Image fill src={game.image} alt={game.title} className="object-cover" />
              </div>

              <span className="font-medium">{game.title}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section className="w-full" title="Want To Play" txt="Wishlist">
        <div>
          {games.map((game) => (
            <div key={game.id} className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg">
                <Image fill src={game.image} alt={game.title} className="object-cover" />
              </div>

              <span className="font-medium">{game.title}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section className="w-full" title="completed" txt="Finished games">
        <div>
          {games.map((game) => (
            <div key={game.id} className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg">
                <Image fill src={game.image} alt={game.title} className="object-cover" />
              </div>

              <span className="font-medium">{game.title}</span>
            </div>
          ))}
        </div>
      </Section>
    </Wrapper>
  );
};

export default UserLists;
