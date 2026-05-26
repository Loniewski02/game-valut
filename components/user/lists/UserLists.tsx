import Section from "../../shared/layout/Section";
import Wrapper from "../../shared/layout/Wrapper";
import ListItem from "./ListItem";

const game = {
  id: "playing-1",
  title: "Cyberpunk 2077",
  image: "/assets/witcher-3-hero.jpg",
};

const UserLists = () => {
  return (
    <Wrapper className="max-w-[1440px] lg:grid lg:grid-cols-4 lg:gap-4">
      <Section className="col-span-2" wrapperClassName="flex flex-col gap-2" title="Want To Play">
        <ListItem game={game} currentList="Want To Play" />
      </Section>
      <Section className="col-span-2" wrapperClassName="flex flex-col gap-2" title="Playing">
        <ListItem game={game} currentList="Playing" />
      </Section>
      <Section className="col-span-2 col-start-2" wrapperClassName="flex flex-col gap-2" title="Completed">
        <ListItem game={game} currentList="Completed" />
      </Section>
    </Wrapper>
  );
};

export default UserLists;
