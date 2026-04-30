import { AiFillStar } from "react-icons/ai";

const RatingBadge: React.FC<{ rating: number; textStyle: string; reversed?: boolean }> = ({
  rating,
  textStyle,
  reversed,
}) => {
  return (
    <div className="flex w-max items-center gap-1">
      <AiFillStar className={`${!reversed ? "order-2" : "order-1"} text-xl text-Yellow`} />
      <span className={`${textStyle} ${!reversed ? "order-1" : "order-2"} text-15 font-normal`}>{rating}</span>
    </div>
  );
};

export default RatingBadge;
