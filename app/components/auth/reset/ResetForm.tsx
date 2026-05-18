import FormBox from "../../shared/ui/FormBox";
import TextLink from "../../shared/ui/TextLink";
import Submit from "../../shared/ui/Submit";

import { RESET_INPUT } from "@/app/lib/constant";

const ResetForm = () => {
  return (
    <form action="" className="flex flex-col gap-6">
      <FormBox input={RESET_INPUT} />
      <Submit>Reset</Submit>
      <TextLink href="/auth?mode=login" text="Do you already have an account?">
        Sign in.
      </TextLink>
    </form>
  );
};

export default ResetForm;
