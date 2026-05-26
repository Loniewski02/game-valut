import { Suspense } from "react";

import LoadingIndicator from "@/components/shared/states/LoadingIndicator";
import GameDetail from "./GameDetail";

const GameDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <GameDetail slug={params.slug} />
    </Suspense>
  );
};

export default GameDetailPage;
