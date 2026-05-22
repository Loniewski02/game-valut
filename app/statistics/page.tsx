import { Suspense } from "react";

import LoadingIndicator from "@/components/shared/states/LoadingIndicator";
import Statistics from "./Statistics";

const StatisticsPage = () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Statistics />
    </Suspense>
  );
};

export default StatisticsPage;
