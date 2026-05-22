"use client";
import { useFormStatus } from "react-dom";
import LoadingIndicator from "../states/LoadingIndicator";

type Props = { children: React.ReactNode };

const Submit = ({ children }: Props) => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending ? (
        <button
          type="submit"
          aria-label="submit-form"
          className="block  rounded-xl border border-transparent bg-Primary px-6 py-3 text-15 font-medium text-White transition hover:bg-PrimaryHover active:scale-95"
          disabled={pending}
        >
          {children}
        </button>
      ) : (
        <LoadingIndicator small />
      )}
    </>
  );
};

export default Submit;
