// src/components/token-holdings/TokenHoldingsTable.tsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TokenHolding } from "@/types/token-holdings";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface TokenHoldingsTableProps {
  holdings: TokenHolding[];
}

export function TokenHoldingsTable({ holdings }: TokenHoldingsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Asset</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Contract Address</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Change (24H)</TableHead>
          <TableHead className="text-right">Value</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {holdings.map((token) => (
          <TableRow key={token.symbol}>
            <TableCell>
              <div className="flex items-center gap-2">
                <Image
                  src={token.icon}
                  alt={token.name}
                  className="w-6 h-6 rounded-full"
                  width={24}
                  height={24}
                />
                <span>{token.name}</span>
              </div>
            </TableCell>
            <TableCell>{token.symbol}</TableCell>
            <TableCell>
              {token.contractAddress ? (
                <Link
                  href={`/token/${token.contractAddress}`}
                  className="text-primary hover:underline"
                >
                  {token.contractAddress}
                </Link>
              ) : (
                "-"
              )}
            </TableCell>
            <TableCell className="text-right">{token.quantity}</TableCell>
            <TableCell className="text-right">
              ${token.price.toFixed(6)}
            </TableCell>
            <TableCell className="text-right">
              <span
                className={
                  token.change24h >= 0 ? "text-green-500" : "text-red-500"
                }
              >
                {token.change24h >= 0 ? (
                  <ArrowUp className="inline h-4 w-4" />
                ) : (
                  <ArrowDown className="inline h-4 w-4" />
                )}
                {Math.abs(token.change24h)}%
              </span>
            </TableCell>
            <TableCell className="text-right">
              ${token.value.toLocaleString()}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    More
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Token Info</DropdownMenuItem>
                  <DropdownMenuItem>View Token Transfers</DropdownMenuItem>
                  <DropdownMenuItem>View Analytics</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}