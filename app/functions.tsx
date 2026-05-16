import { formatDistanceToNow } from "date-fns";

export const dateFormatterToNow = (date: Date) => formatDistanceToNow(new Date(date), { addSuffix: true });
export const dateFormatter = (text: string | Date) => {
  const date = new Date(text);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
