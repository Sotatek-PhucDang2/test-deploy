// src/app/token-holdings/page.tsx
"use client";

import { TokenHoldingsControls } from "@/components/token-holdings/TokenHoldingsControls";
import { TokenHoldingsOverview } from "@/components/token-holdings/TokenHoldingsOverview";
import { TokenHoldingsTable } from "@/components/token-holdings/TokenHoldingsTable";
import { Button } from "@/components/ui/button";
import { TokenHolding, TokenHoldingsOverview as TokenHoldingsOverviewType } from "@/types/token-holdings";
import { Copy } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

// Mock data - replace with real API call
const mockOverview: TokenHoldingsOverviewType = {
  netWorthUsd: 38425.19,
  netWorthEth: 11.564576,
  totalBalanceChange: -0.12,
  assetsInWallet: {
    count: 82,
    value: 38425.19,
  },
  nftAssets: {
    count: 44,
    value: 0,
  },
  liquidityPoolAssets: {
    count: 0,
    value: 0,
  },
};

const mockHoldings: TokenHolding[] = [
  {
    icon: "/placeholder.svg",
    name: "Ethereum",
    symbol: "ETH",
    contractAddress: "",
    quantity: "11.54090678",
    price: 3322.66,
    change24h: -1.11,
    value: 38346.53,
  },
  {
    icon: "/placeholder.svg",
    name: "Tether USD",
    symbol: "USDT",
    contractAddress: "0xdAC17F95...13D831ec7",
    quantity: "37.781322",
    price: 0.999879,
    change24h: 0.09,
    value: 37.78,
  },
  // Add more mock data as needed
];

export default function TokenHoldingsContent() {
  const searchParams = useSearchParams();
  const address = searchParams.get("a");
  const [hideZeroBalance, setHideZeroBalance] = useState(false);
  const [showEthValue, setShowEthValue] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-lg">🪙</span>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Token Holdings</h1>
          <div className="flex items-center gap-2">
            <code className="text-sm">{address}</code>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <TokenHoldingsOverview overview={mockOverview} />

        <div className="space-y-4">
          <TokenHoldingsControls
            hideZeroBalance={hideZeroBalance}
            setHideZeroBalance={setHideZeroBalance}
            showEthValue={showEthValue}
            setShowEthValue={setShowEthValue}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="border rounded-lg">
            <TokenHoldingsTable holdings={mockHoldings} />
          </div>
        </div>
      </div>
    </div>
  );
}