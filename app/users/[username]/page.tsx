import { Suspense } from "react";

import LoadingIndicator from "@/components/shared/states/LoadingIndicator";
import UserDetails from "./UserDetails";

const UserDetailsPage = () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <UserDetails />
    </Suspense>
  );
};

export default UserDetailsPage;
