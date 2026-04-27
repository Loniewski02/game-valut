import Link from "next/link";
import Submit from "../Submit";
import FormBox from "../FormBox";

import { RESET_INPUT } from "@/app/utils/constant";

const ResetForm = () => {
  return (
    <form action="" className="flex flex-col gap-6">
      <FormBox input={RESET_INPUT} />
      <Submit>Reset</Submit>
      <p className="text-15 text-textSec">
        Masz już konto?{" "}
        <Link href={"/auth?mode=login"} className="text-primary underline">
          Zaloguj się
        </Link>
      </p>
    </form>
  );
};

export default ResetForm;
