// src/app/txs/TransactionsPageContent.tsx
"use client";

import { TransactionsTable } from "@/components/transaction-table";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { useTransactionList } from "@/hooks/useTransactions";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function TransactionsPageContent() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = 25;
  const { data, isLoading } = useTransactionList(page, limit);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <div className="text-sm text-muted-foreground">
          More than 2,637,554,785 transactions found
        </div>
      </div>

      <div className="border rounded-lg mb-4">
        <Suspense fallback={<div>Loading...</div>}>
          <TransactionsTable
            transactions={data?.data}
            isLoading={isLoading}
          />
        </Suspense>
      </div>

      <PaginationWithLinks
        page={page}
        pageSize={limit}
        totalCount={data?.metadata.total || 0}
      />
    </div>
  );
}