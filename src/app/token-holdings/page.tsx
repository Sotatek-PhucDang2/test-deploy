import { Suspense } from "react";
import TokenHoldingsContent from "./TokenHoldingContent";
export default function TokenHoldingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TokenHoldingsContent />
    </Suspense>
  );
}
