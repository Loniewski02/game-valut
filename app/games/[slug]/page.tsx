import { Suspense } from "react";

import LoadingIndicator from "@/components/shared/states/LoadingIndicator";
import GameDetail from "./GameDetail";

const GameDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <GameDetail params={params} />
    </Suspense>
  );
};

export default GameDetailPage;
