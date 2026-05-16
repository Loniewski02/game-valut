import Section from "../../layout/Section";
import RatingBadge from "../../layout/RatingBadge";

const GameDetailRating = ({
  rating,
}: {
  rating: { average: number | string; count: number; distribution: { rating: number; count: number }[] };
}) => {
  return (
    <Section title="community rating">
      <div className="items-center gap-24 md:flex md:px-8 lg:px-14">
        <div className="min-w-max">
          <RatingBadge rating={rating.average} textClassName="text-4xl font-semibold mr-2" iconClassName="text-3xl" />
          <p className="mt-2 text-15 text-GrayishBlue">{`Based on ${rating.count} user ${rating.count > 1 ? "reviews" : "review"}`}</p>
        </div>

        <div className="mt-6 flex w-full flex-col gap-3 md:w-3/5 md:gap-1">
          {rating.distribution.map((item) => {
            const width = (item.count / rating.count) * 100;

            return (
              <div key={item.rating} className="flex items-center gap-4">
                <RatingBadge rating={item.rating} />
                <div className="relative h-2 w-full overflow-hidden rounded-xl bg-Gray">
                  <div
                    className="absolute inset-0 rounded-xl bg-Primary"
                    style={{
                      width: `${width}%`,
                    }}
                  />
                </div>
                <span className="min-w-10 text-right text-GrayishBlue">{Math.round(width)}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default GameDetailRating;
