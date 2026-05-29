import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";

import { updateProfileAction } from "@/lib/actions/user";
import { MessagesContext } from "@/components/_providers/MessagesContext";

import Section from "@/components/shared/layout/Section";
import Submit from "@/components/shared/ui/buttons/Submit";
import FormBox from "@/components/shared/ui/FormBox";

export const MAIN_SETTINGS_PROFILE = [
  {
    id: "username",
    name: "username",
    placeholder: "Username",
    type: "text",
    label: "Username",
  },
  {
    id: "email",
    name: "email",
    placeholder: "Email",
    type: "email",
    label: "Email",
  },
  {
    id: "old-password",
    name: "old-password",
    placeholder: "Old password",
    type: "password",
    label: "Old password",
  },
  {
    id: "new-password",
    name: "new-password",
    placeholder: "New password",
    type: "password",
    label: "New password",
  },
];

const initialState = {
  status: null,
  message: null,
};

const Profile = ({ username, email }: { username: string; email: string }) => {
  const { update } = useSession();
  const router = useRouter();
  const [state, action] = useFormState(updateProfileAction.bind(null, username), initialState);
  const { setNewMessage } = useContext(MessagesContext);

  useEffect(() => {
    if (state.status && state.message) {
      setNewMessage(state.status, state.message);

      if (state.status === 200) {
        update({
          username: state.user.username,
          email: state.user.email,
        });
        router.replace(`/users/${state.user.username.toLowerCase()}`);
      }
    }
  }, [state]);

  return (
    <Section title="profile" className="w-full lg:w-2/3">
      <form action={action} className="flex flex-col gap-4">
        {MAIN_SETTINGS_PROFILE.map((item) => {
          const input = { ...item, val: item.id === "username" ? username : item.id === "email" ? email : null };

          return <FormBox input={input} key={item.id} defaultVal={input.val} notRequied />;
        })}
        <div className="mt-2 self-end">
          <Submit>Save</Submit>
        </div>
      </form>
    </Section>
  );
};

export default Profile;
