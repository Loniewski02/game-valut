import { useFilters } from "@/hooks/useFilters";

import Section from "../shared/layout/Section";

const CONTROLS = ["overview", "reviews", "lists", "settings"];

const UserControls = () => {
  const { searchParams, update } = useFilters();

  const section = searchParams.get("section");

  const sectionHandler = (value: string | null) => update("section", value);

  return (
    <Section wrapperClassName="flex justify-between gap-2">
      {CONTROLS.map((control) => (
        <button
          key={control}
          className={`${section === control && "text-Primary"} w-1/4 text-15 font-semibold uppercase tracking-tight transition hover:text-Primary`}
          onClick={() => sectionHandler(control)}
        >
          {control}
        </button>
      ))}
    </Section>
  );
};

export default UserControls;
