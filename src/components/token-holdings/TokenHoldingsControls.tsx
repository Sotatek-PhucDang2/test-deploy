// src/components/token-holdings/TokenHoldingsControls.tsx
"use client";

import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TokenHoldingsControlsProps {
  hideZeroBalance: boolean;
  setHideZeroBalance: (
    // eslint-disable-next-line no-unused-vars
    value: boolean) => void;
  showEthValue: boolean;
  setShowEthValue: (
    // eslint-disable-next-line no-unused-vars
    value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (
    // eslint-disable-next-line no-unused-vars
    value: string) => void;
}

export function TokenHoldingsControls({
  hideZeroBalance,
  setHideZeroBalance,
  showEthValue,
  setShowEthValue,
  searchQuery,
  setSearchQuery,
}: TokenHoldingsControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-lg font-semibold">Assets in Wallet</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch
              checked={hideZeroBalance}
              onCheckedChange={setHideZeroBalance}
              id="hide-zero"
            />
            <label htmlFor="hide-zero" className="text-sm">
              Hide $0.00 assets
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              checked={showEthValue}
              onCheckedChange={setShowEthValue}
              id="show-eth"
            />
            <label htmlFor="show-eth" className="text-sm">
              Show/Hide value in ETH
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Token Name / Address"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}