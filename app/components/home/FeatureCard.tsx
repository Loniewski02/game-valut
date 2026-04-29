import { Feature } from "@/app/types";

const FeatureCard: React.FC<{ data: Feature }> = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className="flex max-w-lg items-center gap-6 rounded-2xl bg-card px-6 py-4">
      <div className="rounded-2xl bg-bgc p-4">
        <Icon className="text-5xl text-primary" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-bold text-text md:text-xl">{data.title}</h3>
        <p className="text-15 leading-4">{data.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
