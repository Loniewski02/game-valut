import Button from "../shared/ui/buttons/Button";
import Section from "../shared/layout/Section";
import Wrapper from "../shared/layout/Wrapper";
import Submit from "../shared/ui/buttons/Submit";
import { useFormState } from "react-dom";
import { updateProfileAction } from "@/lib/actions/user";
import { MessagesContext } from "../_providers/MessagesContext";
import { useContext, useEffect } from "react";
import FormBox from "../shared/ui/FormBox";

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
];

const initialState = {
  status: null,
  message: null,
};

const UserSettings = ({ username }: { username: string }) => {
  const [state, action] = useFormState(updateProfileAction.bind(null, username), initialState);
  const { setNewMessage } = useContext(MessagesContext);

  useEffect(() => {
    if (state.status && state.message) {
      setNewMessage(state.status, state.message);
    }
  }, [state]);

  return (
    <>
      <Wrapper className="">
        <Section title="profile">
          <form action="" className="flex flex-col gap-4">
            {MAIN_SETTINGS_PROFILE.map((item) => (
              <FormBox input={item} key={item.id} />
            ))}
            <div className="mt-2 self-end">
              <Submit>Save</Submit>
            </div>
          </form>
        </Section>
      </Wrapper>
      <Section>
        <div className="rounded-2xl border border-red-300 bg-red-50 p-6">
          <h2 className="mb-2 text-xl font-semibold text-red-500">Danger Zone</h2>
          <p className="text-14 mb-6 text-GrayishBlue">
            Permanently delete your account and all associated reviews, lists and activity.
          </p>
          <Button transparent className="border-red-400 text-red-500">
            Delete Account
          </Button>
        </div>
      </Section>
    </>
  );
};

export default UserSettings;
