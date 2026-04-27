"use client";
import Link from "next/link";
import Submit from "../Submit";
import FormBox from "../FormBox";

import { REGISTER_INPUTS } from "@/app/utils/constant";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-6">
      {REGISTER_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <p className="text-13  text-textSec">Hasło musi składać się z conajmniej 8 znaków.</p>
      <Submit>Utwórz konto</Submit>
      <p className="text-13 text-center text-textSec">
        Masz już konto?{" "}
        <Link href={"/auth?mode=login"} className="text-primary underline">
          Zaloguj się
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
