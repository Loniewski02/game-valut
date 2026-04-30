import { Feature } from "@/app/types";

type Props = { data: Feature };

const FeatureCard = ({ data }: Props) => {
  const Icon = data.icon;
  return (
    <div className="flex max-w-lg items-center gap-6 rounded-2xl bg-White px-6 py-4">
      <div className="rounded-2xl bg-LightGray p-5">
        <Icon className="text-4xl" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-semibold md:text-xl">{data.title}</h3>
        <p className="text-15 leading-4">{data.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
