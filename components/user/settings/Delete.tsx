import Section from "@/components/shared/layout/Section";
import Button from "@/components/shared/ui/buttons/Button";
import FormBox from "@/components/shared/ui/FormBox";

const CONFIRM = {
  id: "confirm",
  name: "confirm",
  placeholder: "Write your username...",
  type: "text",
  label: "Username",
};

const Delete = () => {
  return (
    <Section>
      <div className="rounded-2xl border border-red-300 bg-red-50 p-6">
        <h2 className="mb-2 text-xl font-semibold text-red-500">Danger Zone</h2>
        <p className="text-14 mb-6 text-GrayishBlue">Permanently delete your account.</p>
        <form action="">
          <FormBox input={CONFIRM} />
        </form>
        <Button transparent className="border-red-400 text-red-500">
          Delete Account
        </Button>
      </div>
    </Section>
  );
};

export default Delete;
