import { MainStats } from "@/app/types";

import { AiFillStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import Wrapper from "../shared/layout/Wrapper";

const StatisticsCards = ({ data }: { data: MainStats }) => {
  return (
    <section className="py-2 md:py-4">
      <Wrapper className="flex flex-wrap justify-center gap-2 md:gap-5 xl:flex-nowrap xl:justify-between">
        <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
          <div className="w-max justify-self-center rounded-full bg-purple-500/10 p-5">
            <IoLogoGameControllerB className="text-4xl text-purple-500" />
          </div>
          <div className="text-left">
            <h3 className="mb-2 text-lg">Total Games</h3>
            <p className="text-3xl font-medium md:col-start-2">{data.totalGames}</p>
          </div>
        </div>
        <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
          <div className="w-max justify-self-center rounded-full bg-Yellow/10 p-5">
            <AiFillStar className="text-4xl text-Yellow" />
          </div>
          <div className="text-left">
            <h3 className="mb-2 text-lg">Average Rating</h3>
            <p className="text-3xl font-medium md:col-start-2">{data.averageRating}</p>
          </div>
        </div>
        <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
          <div className="w-max justify-self-center rounded-full bg-green-500/10 p-5">
            <FaUsers className="text-4xl text-green-500" />
          </div>
          <div className="text-left">
            <h3 className="mb-2 text-lg">Total Reviews</h3>
            <p className="text-3xl font-medium md:col-start-2">{data.totalReviews}</p>
          </div>
        </div>
        <div className="flex w-full min-w-max items-start gap-6 rounded-xl bg-White p-6 md:max-w-80">
          <div className="w-max justify-self-center rounded-full bg-Primary/10 p-5">
            <BiCalendar className="text-4xl text-Primary" />
          </div>
          <div className="text-left">
            <h3 className="mb-2 text-lg">Years Covered</h3>
            <p className="text-3xl font-medium md:col-start-2">{data.yearsCovered}</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default StatisticsCards;
