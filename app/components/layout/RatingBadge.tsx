import { AiFillStar } from "react-icons/ai";

type Props = { rating: number; light?: boolean; reversed?: boolean };

const RatingBadge = ({ rating, light, reversed }: Props) => {
  return (
    <div className="flex w-max items-center gap-1">
      <AiFillStar className={`${!reversed ? "order-2" : "order-1"} text-xl text-Yellow`} />
      <span className={`${light ? "text-White" : "text-DarkGrayishBlue"} ${!reversed ? "order-1" : "order-2"} text-15`}>
        {rating}
      </span>
    </div>
  );
};

export default RatingBadge;
