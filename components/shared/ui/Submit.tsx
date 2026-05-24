"use client";
import { useFormStatus } from "react-dom";

import LoadingIndicator from "../states/LoadingIndicator";

type Props = { children: React.ReactNode; isDisabled?: boolean };

const Submit = ({ children, isDisabled }: Props) => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending ? (
        <button
          type="submit"
          aria-label="submit-form"
          className="block max-h-12 rounded-xl border border-transparent bg-Primary px-6 py-3 text-15 font-medium text-White transition hover:bg-PrimaryHover active:scale-95"
          disabled={isDisabled || pending}
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
