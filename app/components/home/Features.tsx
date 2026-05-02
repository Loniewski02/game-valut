import Section from "../layout/Section";

import { FEATURES } from "@/app/utils/constant";

const features = FEATURES;

const Features = () => {
  return (
    <Section title="features">
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.id} className="flex max-w-lg items-center gap-4 rounded-2xl bg-LightGray p-4">
              <div className="rounded-2xl bg-White p-5">
                <Icon className="text-4xl" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold md:text-xl">{feature.title}</h3>
                <p className="text-15 leading-4">{feature.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Features;
