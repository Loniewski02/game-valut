import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";

import { FEATURES } from "@/app/utils/constant";

const features = FEATURES;

const Features = () => {
  return (
    <Section>
      <Wrapper className="flex flex-col items-center">
        <h2 className="mb-4 w-full max-w-lg text-2xl font-semibold uppercase md:text-3xl lg:max-w-none lg:text-2xl">
          Features
        </h2>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="flex max-w-lg items-center gap-6 rounded-2xl bg-White px-6 py-4">
                <div className="rounded-2xl bg-LightGray p-5">
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
      </Wrapper>
    </Section>
  );
};

export default Features;
