"use client";

import { ArrowUpRight } from "lucide-react";
import { TransactionChart } from "./transaction-chart";

export default function CryptoStats() {
  return (
    <div className="border border-border rounded-lg p-6 mb-4 bg-card text-card-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x lg:divide-border">
        {/* Left Column */}
        <div className="space-y-6 lg:pr-6 flex flex-col justify-between">
          {/* Ether Price */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-muted">
              <svg
                className="w-6 h-6"
                viewBox="0 0 784.37 1277.39"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <polygon
                    fill="hsl(var(--primary-foreground))"
                    fillRule="nonzero"
                    points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
                  />
                  <polygon
                    fill="hsl(var(--primary-foreground))"
                    fillRule="nonzero"
                    points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
                  />
                  <polygon
                    fill="hsl(var(--primary-foreground))"
                    fillRule="nonzero"
                    points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
                  />
                  <polygon
                    fill="hsl(var(--primary-foreground))"
                    fillRule="nonzero"
                    points="392.07,1277.38 392.07,956.52 -0,724.89"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">ETHER PRICE</div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">
                  $3,369.76
                </span>
                <span className="text-xs text-muted-foreground">
                  @ 0.033835 BTC
                </span>
                <span className="text-xs text-emerald-500 flex items-center">
                  (+4.48%) <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          <hr className="border-border my-5" />

          {/* Market Cap */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-muted">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">MARKET CAP</div>
              <div className="text-sm font-bold text-foreground">
                $406,051,792,833.00
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6 lg:px-6 flex flex-col justify-between">
          {/* Transactions */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-muted">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">TRANSACTIONS</p>
              <div className="flex items-center gap-2">
                <div className="text-sm font-bold text-foreground">
                  2,657.52 M
                </div>
                <div className="text-xs text-muted-foreground">(13.4 TPS)</div>
              </div>
            </div>
          </div>

          <hr className="border-border my-5" />

          {/* Last Finalized Block */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-muted">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                LAST FINALIZED BLOCK
              </div>
              <div className="text-sm font-bold text-foreground">21634583</div>
            </div>
          </div>
        </div>

        {/* Right Column - Transaction History Chart */}
        <div className="flex flex-col justify-between lg:pl-6 lg:h-full">
          <div className="text-xs text-muted-foreground">
            TRANSACTION HISTORY IN 14 DAYS
          </div>
          <TransactionChart />
        </div>
      </div>
    </div>
  );
}
