import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatEther, formatHash, formatTimestamp } from "@/helpers/format";
import type { Transaction } from "@/types/transactions";
import { FileIcon } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

interface TransactionsTableProps {
  transactions: Transaction[] | undefined;
  isLoading: boolean;
}

export function TransactionsTable({
  transactions,
  isLoading,
}: TransactionsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Txn Hash</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="hidden md:table-cell">Block</TableHead>
          <TableHead className="hidden md:table-cell">Age</TableHead>
          <TableHead className="hidden lg:table-cell">From</TableHead>
          <TableHead className="hidden lg:table-cell">To</TableHead>
          <TableHead className="text-right">Value</TableHead>
          <TableHead className="text-right hidden md:table-cell">
            Gas Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index} className="h-14">
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
              </TableRow>
            ))
          : transactions?.map((tx) => (
              <TableRow key={tx.hash}>
                <TableCell>
                  <Link
                    href={`/tx/${tx.hash}`}
                    className="flex items-center gap-2 text-blue-700 hover:underline"
                  >
                    <FileIcon className="h-4 w-4" />
                    {formatHash(tx.hash)}
                  </Link>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    {tx.input.substring(0, 10)}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Link
                    href={`/block/${tx.blockNumber}`}
                    className="text-blue-700 hover:underline"
                  >
                    {tx.blockNumber}
                  </Link>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatTimestamp(tx.createdAt)}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Link
                    href={`/address/${tx.from}`}
                    className="text-blue-700 hover:underline"
                  >
                    {formatHash(tx.from)}
                  </Link>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Link
                    href={`/address/${tx.to}`}
                    className="text-blue-700 hover:underline"
                  >
                    {formatHash(tx.to)}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  {formatEther(tx.value)} ETH
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {tx.gasPrice} Gwei
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
