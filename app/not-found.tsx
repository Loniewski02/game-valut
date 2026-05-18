import { BiSad } from "react-icons/bi";
import EmptySection from "./components/shared/states/EmptySection";
import Button from "./components/shared/ui/Button";

const NotFound = () => {
  return (
    <EmptySection Icon={BiSad} title="Page not found" text="The page you are trying to access does not exist.">
      <Button className="mt-6" href="/" link>
        Go back home
      </Button>
    </EmptySection>
  );
};

export default NotFound;
