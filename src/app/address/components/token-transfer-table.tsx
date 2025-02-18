import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TokenTransfer } from "@/types/address";
import { FileIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TokenTransfersTableProps {
  transfers: TokenTransfer[];
}

export function TokenTransfersTable({ transfers }: TokenTransfersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction Hash</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Block</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Token</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transfers.map((transfer) => (
          <TableRow key={transfer.hash}>
            <TableCell>
              <Link
                href={`/tx/${transfer.hash}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <FileIcon className="h-4 w-4" />
                {transfer.hash.substring(0, 16)}...
              </Link>
            </TableCell>
            <TableCell>
              <span className="px-2 py-1 bg-muted rounded text-xs">
                {transfer.method}
              </span>
            </TableCell>
            <TableCell>
              <Link
                href={`/block/${transfer.block}`}
                className="text-primary hover:underline"
              >
                {transfer.block}
              </Link>
            </TableCell>
            <TableCell>{transfer.age}</TableCell>
            <TableCell>
              <Link
                href={`/address/${transfer.from}`}
                className="text-primary hover:underline"
              >
                {transfer.from.substring(0, 16)}...
              </Link>
            </TableCell>
            <TableCell>
              <Link
                href={`/address/${transfer.to}`}
                className="text-primary hover:underline"
              >
                {transfer.to.substring(0, 16)}...
              </Link>
            </TableCell>
            <TableCell className="text-right">{transfer.amount}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {transfer.token.icon && (
                  <Image
                    src={transfer.token.icon}
                    alt={transfer.token.symbol}
                    className="w-5 h-5 rounded-full"
                    width={20}
                    height={20}
                  />
                )}
                <span>{transfer.token.symbol}</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
