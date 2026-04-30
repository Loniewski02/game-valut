import Wrapper from "../layout/Wrapper";
import FeatureCard from "./FeatureCard";

import { FEATURES } from "@/app/utils/constant";

const features = FEATURES;

const Features = () => {
  return (
    <section className="py-6 lg:py-8">
      <Wrapper className="flex flex-col items-center">
        <h2 className="mb-4 w-full max-w-lg text-2xl font-semibold uppercase md:text-3xl lg:max-w-none lg:text-2xl">
          Features
        </h2>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          {features.map((feature) => (
            <FeatureCard key={feature.id} data={feature} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
