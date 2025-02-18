import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchNFTContracts } from "@/lib/api";
import { ArrowDown, ArrowUp } from "lucide-react";

export default async function NFTContractsPage() {
  const contracts = await fetchNFTContracts(100);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Top NFT Contracts</h1>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Collection</TableHead>
              <TableHead className="text-right">Floor Price</TableHead>
              <TableHead className="text-right">Volume (24h)</TableHead>
              <TableHead className="text-right">24h %</TableHead>
              <TableHead className="text-right hidden md:table-cell">
                Owners
              </TableHead>
              <TableHead className="text-right hidden lg:table-cell">
                Items
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.rank}>
                <TableCell>{contract.rank}</TableCell>
                <TableCell>
                  <div className="font-medium">{contract.name}</div>
                </TableCell>
                <TableCell className="text-right">
                  {contract.floorPrice} ETH
                </TableCell>
                <TableCell className="text-right">{contract.volume}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={
                      contract.change > 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {contract.change > 0 ? (
                      <ArrowUp className="inline h-4 w-4" />
                    ) : (
                      <ArrowDown className="inline h-4 w-4" />
                    )}
                    {Math.abs(contract.change).toFixed(2)}%
                  </span>
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {contract.owners.toLocaleString()}
                </TableCell>
                <TableCell className="text-right hidden lg:table-cell">
                  {contract.items.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
