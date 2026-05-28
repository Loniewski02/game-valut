import { Suspense } from "react";

import LoadingIndicator from "@/components/shared/states/LoadingIndicator";
import UserDetails from "./UserDetails";

const UserDetailsPage = ({ params }: { params: { username: string } }) => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <UserDetails username={params.username.toLowerCase()} />
    </Suspense>
  );
};

export default UserDetailsPage;
