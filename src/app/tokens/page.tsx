import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchTokens } from "@/lib/api";
import { ArrowDown, ArrowUp } from "lucide-react";

export default async function TokensPage() {
  const tokens = await fetchTokens(100);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Top ERC-20 Tokens by Market Cap
      </h1>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Token</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24h %</TableHead>
              <TableHead className="text-right hidden md:table-cell">
                Volume (24h)
              </TableHead>
              <TableHead className="text-right hidden lg:table-cell">
                Market Cap
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.map((token) => (
              <TableRow key={token.rank}>
                <TableCell>{token.rank}</TableCell>
                <TableCell>
                  <div className="font-medium">{token.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {token.symbol}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${token.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={
                      token.change > 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {token.change > 0 ? (
                      <ArrowUp className="inline h-4 w-4" />
                    ) : (
                      <ArrowDown className="inline h-4 w-4" />
                    )}
                    {Math.abs(token.change).toFixed(2)}%
                  </span>
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {token.volume}
                </TableCell>
                <TableCell className="text-right hidden lg:table-cell">
                  {token.marketCap}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
