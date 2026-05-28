"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

import { MessagesContext } from "../../_providers/MessagesContext";

import { FormLoginAction } from "@/lib/actions/auth";
import { LOGIN_INPUTS } from "@/utils/constant";

import FormBox from "../../shared/ui/FormBox";
import TextLink from "../../shared/ui/TextLink";
import Submit from "../../shared/ui/buttons/Submit";

const initialState = {
  message: null,
  status: null,
};

const LoginForm = () => {
  const { replace, refresh } = useRouter();
  const [state, action] = useFormState(FormLoginAction, initialState);
  const { setNewMessage } = useContext(MessagesContext);

  useEffect(() => {
    if (state.status && state.message) {
      setNewMessage(state.status, state.message);
    }
  }, [state]);

  useEffect(() => {
    if (state.status === 200) {
      replace(`/users/${state.username}`);
      refresh();
    }
  }, [state.status]);

  return (
    <form action={action} className="flex flex-col gap-6">
      {LOGIN_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
      <Submit>Login</Submit>
      <TextLink href="/auth?mode=register" text="Don't have an account?">
        Sign up.
      </TextLink>
    </form>
  );
};

export default LoginForm;
