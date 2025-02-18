import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { NFTTransfer } from "@/types/address";
import Image from "next/image";
import Link from "next/link";

interface NFTTransfersTableProps {
  transfers: NFTTransfer[];
}

export function NFTTransfersTable({ transfers }: NFTTransfersTableProps) {
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
          <TableHead>Type</TableHead>
          <TableHead>Item</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transfers.map((transfer) => (
          <TableRow key={transfer.hash}>
            <TableCell>
              <Link
                href={`/tx/${transfer.hash}`}
                className="text-primary hover:underline"
              >
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
            <TableCell>{transfer.type}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {transfer.item.icon && (
                  <Image
                    src={transfer.item.icon}
                    alt=""
                    className="w-8 h-8 rounded"
                    width={32}
                    height={32}
                  />
                )}
                <div>
                  <div className="font-medium">{transfer.item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {transfer.item.collection}
                  </div>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
