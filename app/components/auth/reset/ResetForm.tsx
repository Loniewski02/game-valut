import Link from "next/link";
import Submit from "../Submit";
import FormBox from "../FormBox";

import { RESET_INPUT } from "@/app/utils/constant";

const ResetForm = () => {
  return (
    <form action="" className="flex flex-col gap-6">
      <FormBox input={RESET_INPUT} />
      <Submit>Reset</Submit>
      <p className="text-13 text-textSec">
        {"Do you already have an account?"}
        <Link href={"/auth?mode=login"} className="text-primary underline">
          {"Sign in"}
        </Link>
      </p>
    </form>
  );
};

export default ResetForm;
