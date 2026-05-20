import { Suspense } from "react";

import Rankings from "./Rankings";
import LoadingIndicator from "@/components/shared/states/LoadingIndicator";

export default function Page() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Rankings />
    </Suspense>
  );
}
