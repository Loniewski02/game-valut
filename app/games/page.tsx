import { Suspense } from "react";

import Games from "./Games";
import LoadingIndicator from "@/components/shared/states/LoadingIndicator";

const GamesPage = () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Games />
    </Suspense>
  );
};

export default GamesPage;
