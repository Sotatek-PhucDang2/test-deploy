"use client";

import { Suspense } from "react";
import BlocksPageContent from "./BlocksPageContent";

export default function BlocksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlocksPageContent />
    </Suspense>
  );
}
