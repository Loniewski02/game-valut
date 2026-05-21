import { Suspense } from "react";

import Rankings from "./Rankings";
import LoadingIndicator from "@/components/shared/states/LoadingIndicator";

const RankingsPage = () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Rankings />
    </Suspense>
  );
};

export default RankingsPage;
