import { BiSad } from "react-icons/bi";

import { AiFillStar } from "react-icons/ai";
import Section from "../shared/layout/Section";
import EmptySection from "../shared/states/EmptySection";

const REVIEWS = [{}];

const UserReviews = () => {
  return (
    <Section title={`${"loniewsm"} reviews`}>
      {REVIEWS?.length ? (
        <div className="flex flex-col rounded-2xl md:p-4 lg:gap-2 lg:bg-LightGray/40 lg:p-6">
          {REVIEWS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-b border-Gray py-8 first:pt-0 last:border-none last:pb-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold md:text-xl">The Witcher 3: Wild Hunt</h3>
                  <span className="mt-1 text-13 text-GrayishBlue">Reviewed 2 days ago</span>
                </div>
                <div className="flex w-max items-center gap-1 md:place-self-start lg:col-start-4 lg:justify-self-end">
                  <AiFillStar className="order-1 text-xl text-Yellow md:text-2xl" />
                  <span className="order-2 min-w-5 text-base md:text-lg">{"3"}/5</span>
                </div>
              </div>
              <p className="max-w-3xl leading-relaxed text-GrayishBlue">
                adwadawd awdnawnawiud naduawbdyua bdayhwdbay wbdawyuidcbnawuytd adgbyd audnau
              </p>
            </div>
          ))}
        </div>
      ) : (
        <EmptySection Icon={BiSad} title="No reviews found" text="This user has no reviews" />
      )}
    </Section>
  );
};

export default UserReviews;
