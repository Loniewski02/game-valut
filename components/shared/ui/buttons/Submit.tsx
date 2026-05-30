"use client";
import { useFormStatus } from "react-dom";

import LoadingIndicator from "../../states/LoadingIndicator";

type Props = { children: React.ReactNode; isRed?: boolean };

const Submit = ({ children, isRed }: Props) => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending ? (
        <button
          type="submit"
          aria-label="submit-form"
          className={`${isRed ? "border-red-400 bg-transparent text-red-500 hover:bg-red-400/20" : "border-transparent bg-Primary text-White hover:bg-PrimaryHover"} block rounded-xl border px-6 py-3 text-15 font-medium transition active:scale-95`}
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
