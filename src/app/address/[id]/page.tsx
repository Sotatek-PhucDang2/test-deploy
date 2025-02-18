import { AddressOverview } from "@/app/address/components/address-overview";
import { AnalyticsChart } from "@/app/address/components/analytics-chart";
import { NFTTransfersTable } from "@/app/address/components/nft-transfer-table";
import { ProducedBlocksTable } from "@/app/address/components/produced-block-table";
import { TokenTransfersTable } from "@/app/address/components/token-transfer-table";
import { TransactionsTable } from "@/components/transaction-table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";

// This would come from your API
const mockData = {
  overview: {
    address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
    balance: "11.08839725504252764",
    balanceUsd: "37,806.89",
    tokenHoldings: {
      value: "3,568.40",
      count: 200,
    },
    transactions: {
      total: 1837513,
      latest: "40 secs ago",
      first: "815 days ago",
    },
  },
  analytics: {
    ethHighest: {
      value: "291.205 ETH",
      date: "Dec 13, 2022",
    },
    ethLowest: {
      value: "0 ETH",
      date: "Oct 6, 2022",
    },
    usdHighest: {
      value: "USD 416,101.98",
      date: "Jan 29, 2023",
    },
    usdLowest: {
      value: "USD 0.06",
      date: "Oct 6, 2022",
    },
    timeSeriesData: [
      { date: "2023-01", ethBalance: 100, usdBalance: 150000 },
      { date: "2023-02", ethBalance: 150, usdBalance: 225000 },
      // Add more data points...
    ],
  },
};

export default async function AddressPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log({ id });

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <AddressOverview data={mockData.overview} />
      </Suspense>

      <div className="mt-8">
        <Alert>
          <AlertDescription>
            A wallet address is a publicly available address that allows its
            owner to receive funds from another party. To access the funds in an
            address, you must have its private key.
          </AlertDescription>
        </Alert>
      </div>

      <Tabs defaultValue="transactions" className="mt-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="internal-txns">Internal Txns</TabsTrigger>
          <TabsTrigger value="token-transfers">
            Token Transfers (ERC-20)
          </TabsTrigger>
          <TabsTrigger value="nft-transfers">NFT Transfers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="produced-blocks">Produced Blocks</TabsTrigger>
        </TabsList>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Latest 25 from a total of{" "}
            {mockData.overview.transactions.total.toLocaleString()} transactions
          </div>
          <Button variant="outline" size="sm">
            Download CSV Export
          </Button>
        </div>
        <TabsContent value="transactions" className="mt-4">
          <div className="border rounded-lg">
            <TransactionsTable transactions={[]} isLoading={false} />
          </div>
        </TabsContent>
        <TabsContent value="token-transfers" className="mt-4">
          <div className="space-y-4">
            <Alert>
              <AlertDescription>
                Transactions involving tokens marked as suspicious, unsafe, spam
                or brand infringement are currently hidden. To show them, go to
                Site Settings.
              </AlertDescription>
            </Alert>
            <div className="border rounded-lg">
              <TokenTransfersTable transfers={[]} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="nft-transfers" className="mt-4">
          <div className="border rounded-lg">
            <NFTTransfersTable transfers={[]} />
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="mt-4">
          <AnalyticsChart data={mockData.analytics} />
        </TabsContent>
        <TabsContent value="produced-blocks" className="mt-4">
          <div className="border rounded-lg">
            <ProducedBlocksTable blocks={[]} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
