import { useFilters } from "@/hooks/useFilters";

import Section from "../shared/layout/Section";

const CONTROLS = ["overview", "reviews", "lists", "settings"];

const UserControls = ({ isCurrentUser }: { isCurrentUser: boolean }) => {
  const { searchParams, update } = useFilters();

  const section = searchParams.get("section") ?? "overview";

  const sectionHandler = (value: string | null) => {
    update("section", value);
  };

  const controls = isCurrentUser ? CONTROLS : CONTROLS.filter((item) => item !== "settings");

  return (
    <Section wrapperClassName="flex flex-wrap justify-evenly gap-4">
      {controls.map((control) => (
        <button
          key={control}
          className={`${section === control && "text-Primary"} w-max px-6 py-2 text-15 font-semibold uppercase tracking-tight transition hover:text-Primary`}
          onClick={() => sectionHandler(control)}
        >
          {control}
        </button>
      ))}
    </Section>
  );
};

export default UserControls;
