import Image from "next/image";

import { AiFillStar } from "react-icons/ai";

import profile from "@/public/assets/witcher-3-cover.jpg";
import { Review } from "@/app/generated/prisma/client";
import { dateFormatterToNow } from "@/app/functions";

const ReviewCard = ({ item, postedBy }: { item: Review; postedBy: string }) => {
  return (
    <div className="group relative grid grid-cols-[48px,1fr,auto] gap-3 md:grid-cols-[56px,1fr,auto] md:gap-6 md:gap-y-0 lg:grid-cols-[64px,164px,1fr,164px]">
      <Image
        src={profile.src}
        alt="profile picture"
        width={60}
        height={60}
        className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14 lg:h-16 lg:w-16"
      />
      <div className="flex flex-col md:gap-2">
        <p className="font-semibold md:text-lg">{postedBy}</p>
        <span className="col-start-2 text-13 text-GrayishBlue">{dateFormatterToNow(item.createdAt)}</span>
      </div>
      <div className="flex w-max items-center gap-1 md:place-self-start lg:col-start-4 lg:justify-self-end">
        <AiFillStar className="order-1 text-xl text-Yellow md:text-3xl" />
        <span className="order-2 min-w-5 text-base md:text-lg">{item.rating}/5</span>
      </div>
      <p className="col-span-3 text-15 leading-relaxed md:col-span-2 md:col-start-2 md:text-base lg:col-span-1 lg:col-start-3 lg:row-start-1">
        {item.content}
      </p>
      <div className="absolute -bottom-8 left-0 right-0 h-px bg-Gray group-last:hidden lg:-bottom-6" />
    </div>
  );
};

export default ReviewCard;
