import { HomeBlocksTable } from "@/app/components/home/home-blocks-table";
import Link from "next/link";
import BlockchainOverview from "./components/home/blockchain-overview";
import { HomeTransactionsTable } from "./components/home/home-transaction-table";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlockchainOverview />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Latest Blocks</h2>
            <Link
              href="/blocks"
              className="text-blue-700 hover:underline text-sm"
            >
              View all blocks →
            </Link>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <HomeBlocksTable />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Latest Transactions</h2>
            <Link href="/txs" className="text-blue-700 hover:underline text-sm">
              View all transactions →
            </Link>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <HomeTransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
