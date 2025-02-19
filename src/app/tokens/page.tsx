import { Suspense } from "react";
import TokensPageContent from "./TokensPageContent";

export default function TokensPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TokensPageContent />
    </Suspense>
  );
}
