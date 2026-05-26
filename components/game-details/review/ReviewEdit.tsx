import { AiFillStar } from "react-icons/ai";
import Button from "@/components/shared/ui/buttons/Button";

type Props = {
  content: string;
  rating: number;
  onContent: (e: string) => void;
  onRating: (val: number) => void;
  onSave: () => void;
};

const ReviewEdit = ({ content, rating, onRating, onContent, onSave }: Props) => {
  return (
    <div className="col-span-3 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-3 lg:row-start-1">
      <textarea
        value={content}
        onChange={(e) => onContent(e.target.value)}
        className="min-h-32 w-full resize-none rounded-xl border p-3 text-15 outline-none focus:border-Primary"
      />
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button key={value} type="button" onClick={() => onRating(value)}>
              <AiFillStar className={`text-3xl ${value <= rating ? "text-Yellow" : "text-Gray"}`} />
            </button>
          ))}
        </div>
        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
};

export default ReviewEdit;
