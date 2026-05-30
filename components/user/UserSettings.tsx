import Wrapper from "../shared/layout/Wrapper";

import Profile from "./settings/Profile";
import Account from "./settings/Account";
import Delete from "./settings/Delete";
import { UserProfileType } from "@/types";

const UserSettings = ({ user }: { user: UserProfileType }) => {
  return (
    <>
      <Wrapper className="lg:flex lg:gap-4">
        <Profile username={user.username} email={user.email} />
        <Account username={user.username} desc={user.description} />
      </Wrapper>
      <Delete username={user.username} />
    </>
  );
};

export default UserSettings;
