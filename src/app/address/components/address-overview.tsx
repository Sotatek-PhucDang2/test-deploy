"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { AddressOverview } from "@/types/address";
import { Share2 } from "lucide-react";
import Link from "next/link";
import CopyTooltip from "./copy-tooltip";

interface AddressOverviewProps {
  data: AddressOverview;
}

export function AddressOverview({ data }: AddressOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-2xl">👤</span>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Address</h1>
          <div className="flex items-center gap-2">
            <code className="text-sm">{data.address}</code>
            <CopyTooltip content={data.address} />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-2">
              ETH Balance
            </div>
            <div className="text-2xl font-bold">{data.balance} ETH</div>
            <div className="text-sm text-muted-foreground">
              ${data.balanceUsd}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 pb-4">
            <div className="text-sm text-muted-foreground mb-2">
              Token Holdings
            </div>
            <div className="text-2xl font-bold">
              ${data.tokenHoldings.value}
            </div>
            <Link
              href={`/token-holdings?a=${data.address}`}
              className="mt-2 inline-block text-sm text-blue-500 hover:text-blue-700"
            >
              {data.tokenHoldings.count} tokens
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 pb-4">
            <div className="text-sm text-muted-foreground mb-2">
              Transactions
            </div>
            <div className="text-2xl font-bold">{data.transactions.total}</div>
            <div className="text-sm text-muted-foreground">
              First: {data.transactions.first}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
