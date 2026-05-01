import { BsController } from "react-icons/bs";

import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import Plus from "../layout/Plus";
import Button from "../ui/Button";

const GamesEmpty = () => {
  return (
    <Section>
      <Wrapper className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-White px-8 py-16 text-center shadow-sm md:py-24">
        <div className="mb-6 rounded-full bg-LightGray p-6">
          <BsController className="text-5xl text-Primary" />
        </div>
        <p className="text-3xl font-bold text-DarkGrayishBlue">No games yet</p>
        <p className="max-w-96 text-15 text-GrayishBlue">
          {`No games added yet. This library is built by the community. Be the first to add a game.`}
        </p>
        <Button className="mt-6">
          <Plus />
          Add Game
        </Button>
      </Wrapper>
    </Section>
  );
};

export default GamesEmpty;
