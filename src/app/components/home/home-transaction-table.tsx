"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileIcon } from "lucide-react";
import Link from "next/link";
import { formatHash, formatTimestamp, formatEther } from "@/helpers/format";
import { useTransactionList } from "@/hooks/useTransactions";
import { Skeleton } from "@/components/ui/skeleton";
export function HomeTransactionsTable() {
  const { data: transactions, isLoading } = useTransactionList(1, 5);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Txn Hash</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead className="text-right">Value</TableHead>
          <TableHead className="text-right w-[150px]">Time</TableHead>
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
                  <Skeleton className="h-5 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-24" />
                </TableCell>
              </TableRow>
            ))
          : transactions?.data.map((tx) => (
              <TableRow key={tx.hash} className="h-14">
                <TableCell>
                  <Link
                    href={`/tx/${tx.hash}`}
                    className="flex items-center gap-2 text-blue-700 hover:underline"
                  >
                    <div className="bg-secondary text-muted-foreground p-3 rounded">
                      <FileIcon className="h-5 w-5" />
                    </div>
                    {formatHash(tx.hash)}
                  </Link>
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={`/address/${tx.from}`}
                          className="text-blue-700 hover:underline"
                        >
                          {formatHash(tx.from)}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{tx.from}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={`/address/${tx.to}`}
                          className="text-blue-700 hover:underline"
                        >
                          {formatHash(tx.to)}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{tx.to}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell className="text-right">
                  {formatEther(tx.value)} ETH
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {formatTimestamp(tx.createdAt)}
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
