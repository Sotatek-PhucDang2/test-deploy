// src/components/token-holdings/TokenHoldingsOverview.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TokenHoldingsOverview as TokenHoldingsOverviewType } from "@/types/token-holdings";

interface TokenHoldingsOverviewProps {
  overview: TokenHoldingsOverviewType;
}

export function TokenHoldingsOverview({
  overview,
}: TokenHoldingsOverviewProps) {
  return (
    <div className="grid gap-6">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold mb-4">Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-muted-foreground">
                NET WORTH IN USD
              </div>
              <div className="text-2xl font-bold">
                ${overview.netWorthUsd.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">
                NET WORTH IN ETH
              </div>
              <div className="text-2xl font-bold">
                ♦ {overview.netWorthEth.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">
                TOTAL BALANCE CHANGE (24H)
              </div>
              <div
                className={`text-2xl font-bold ${
                  overview.totalBalanceChange >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {overview.totalBalanceChange}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">
              Assets in Wallet ({overview.assetsInWallet.count})
            </div>
            <div className="text-2xl font-bold">
              ${overview.assetsInWallet.value.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">
              NFT Assets ({overview.nftAssets.count})
            </div>
            <div className="text-2xl font-bold">-</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">
              Liquidity Pool Assets in Wallet (
              {overview.liquidityPoolAssets.count})
            </div>
            <div className="text-2xl font-bold">-</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
