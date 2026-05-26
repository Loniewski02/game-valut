import Button from "../shared/ui/buttons/Button";
import Section from "../shared/layout/Section";
import Wrapper from "../shared/layout/Wrapper";

const UserSettings = () => {
  return (
    <>
      <Wrapper className="justify-start md:gap-4 lg:flex">
        <Section className="w-full" title="profile">
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-2 block text-13 text-GrayishBlue">Username</label>
              <input
                value="loniewsm"
                className="w-full rounded-xl border border-Gray bg-white py-3 pl-5 pr-4"
                readOnly
              />
            </div>
            <div>
              <label className="mb-2 block text-13 text-GrayishBlue">Email</label>
              <input
                value="loniewski@gmail.com"
                className="w-full rounded-xl border border-Gray bg-white py-3 pl-5 pr-4"
                readOnly
              />
            </div>
          </div>
        </Section>
        <Section className="w-full" title="account">
          <div className="flex flex-wrap gap-4">
            <Button>Change Password</Button>
            <Button>Change Avatar</Button>
            <Button>Change Background</Button>
            <Button>Change description</Button>
          </div>
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
