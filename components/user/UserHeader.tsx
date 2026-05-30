import Image from "next/image";

import { dateFormatter } from "@/utils/helpers";
import { UserProfileType } from "@/types";

import { BiCalendar } from "react-icons/bi";
import Header from "../shared/layout/Header";

const UserHeader = ({ data }: { data: UserProfileType }) => {
  return (
    <Header>
      <Image
        width={1000}
        height={500}
        alt={"asd"}
        src={data.backgroundImage}
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-DarkGrayishBlue/80" />
      <div className="relative z-30 flex flex-col items-center text-White md:flex-row md:gap-8">
        <div className="relative h-28 min-w-28 overflow-hidden rounded-full border-[2px] border-White md:h-32 md:min-w-32 md:self-start lg:h-40 lg:min-w-40">
          <Image fill src={data.image} alt="profile picture" className="object-cover" />
        </div>
        <div className="mt-6 flex flex-col items-center text-center md:mt-0 md:items-start md:text-left">
          <h2 className="text-3xl font-semibold lg:text-4xl">{data.username}</h2>
          <p className="mt-2 flex items-center gap-2 text-13 text-Gray lg:mt-4">
            <BiCalendar className="text-lg" />
            <span>Joined {dateFormatter(data.createdAt)}</span>
          </p>
          <p className="mt-4 max-w-xs text-15 leading-relaxed text-Gray md:max-w-md lg:mt-6 lg:text-base">
            {data.description}
          </p>
          <div className="relative z-30 mt-8 flex gap-8">
            <div className="text-center">
              <span className="block text-3xl font-semibold text-white">{data.addedGamesCount}</span>
              <p className="mt-1 text-13 text-Gray lg:text-15">Games Added</p>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-semibold text-white">{data.reviewsCount}</span>
              <p className="mt-1 text-13 text-Gray lg:text-15">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default UserHeader;
