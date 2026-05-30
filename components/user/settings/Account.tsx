import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";

import { updateAccountAction } from "@/lib/actions/user";
import { MessagesContext } from "@/components/_providers/MessagesContext";

import Section from "@/components/shared/layout/Section";
import Submit from "@/components/shared/ui/buttons/Submit";
import FormBox from "@/components/shared/ui/FormBox";

export const INPUTS = [
  {
    id: "profile-picture",
    name: "profile-picture",
    placeholder: "Profile picture...",
    type: "file",
    label: "Profile picture",
  },
  {
    id: "background-picture",
    name: "background-picture",
    placeholder: "Background picture...",
    type: "file",
    label: "Background picture",
  },
];

const initialState = {
  status: null,
  message: null,
};

const Account = ({ desc, username }: { desc: string; username: string }) => {
  const { update } = useSession();
  const [state, action] = useFormState(updateAccountAction.bind(null, username), initialState);
  const { setNewMessage } = useContext(MessagesContext);

  useEffect(() => {
    if (state.status && state.message) {
      setNewMessage(state.status, state.message);

      if (state.status === 200) {
        update({
          image: state.user.image,
        });
        window.location.reload();
      }
    }
  }, [state]);
  return (
    <Section title="account" className="w-full">
      <form action={action} className="flex flex-col gap-4">
        <div className="relative">
          <label htmlFor="description" className="sr-only">
            Your description
          </label>
          <textarea
            id="description"
            name="description"
            className="block max-h-56 min-h-24 w-full rounded-2xl border p-4 text-15 outline-none focus:border-DarkGrayishBlue"
            placeholder="Your description..."
            defaultValue={desc}
          />
        </div>
        {INPUTS.map((item) => (
          <FormBox input={item} key={item.id} notRequied />
        ))}
        <div className="mt-2 self-end">
          <Submit>Save</Submit>
        </div>
      </form>
    </Section>
  );
};

export default Account;
