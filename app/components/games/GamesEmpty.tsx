import { BsController } from "react-icons/bs";

import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import AddGameButton from "./controls/AddGameButton";

const GamesEmpty = () => {
  return (
    <Section>
      <Wrapper className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-card px-8 py-16 text-center shadow-sm md:py-24">
        <div className="mb-6 rounded-full bg-bgc p-6">
          <BsController className="text-5xl text-primary" />
        </div>
        <p className="text-3xl font-bold text-text">No games yet</p>
        <p className="max-w-96 text-15 text-textSec">
          {`No games added yet. This library is built by the community. Be the first to add a game.`}
        </p>
        <AddGameButton classList="mt-6" />
      </Wrapper>
    </Section>
  );
};

export default GamesEmpty;
