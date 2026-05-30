import { MessagesContext } from "@/components/_providers/MessagesContext";
import Section from "@/components/shared/layout/Section";
import Submit from "@/components/shared/ui/buttons/Submit";
import { deleteAccountAction } from "@/lib/actions/user";
import { signOut } from "next-auth/react";
import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = { status: null, message: null };

const Delete = ({ username }: { username: string }) => {
  const [state, action] = useFormState(deleteAccountAction.bind(null, username), initialState);
  const { setNewMessage } = useContext(MessagesContext);

  useEffect(() => {
    if (state.status && state.message) {
      setNewMessage(state.status, state.message);

      if (state.status === 200) {
        signOut({
          callbackUrl: "/",
        });
      }
    }
  }, [state]);
  return (
    <Section>
      <div className="rounded-2xl border border-red-300 bg-red-50 p-6">
        <h2 className="mb-2 text-xl font-semibold text-red-500">Danger Zone</h2>
        <p className="text-14 mb-6 text-GrayishBlue">
          {"To permanently delete your account, type your username below and confirm."}
        </p>
        <form action={action} className="flex flex-col gap-4 md:flex-row">
          <div className={`relative flex  flex-col gap-2`}>
            <label htmlFor="confirm" className="sr-only">
              Username
            </label>
            <input
              id="confirm"
              type="text"
              name="confirm"
              className="z-20 rounded-xl border border-red-400 bg-transparent py-3 pl-5 pr-4 text-15 text-red-900 transition placeholder:text-red-800 hover:bg-red-400/10"
              placeholder="Write your username..."
              required
            />
          </div>
          <div className="self-end">
            <Submit isRed>Delete Account</Submit>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Delete;
