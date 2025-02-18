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
import { formatHash } from "@/helpers/format";
import { useBlockList } from "@/hooks/useBlocks";
import { Skeleton } from "@/components/ui/skeleton";
import { CuboidIcon as CubeIcon } from "lucide-react";
import Link from "next/link";

export function HomeBlocksTable() {
  const { data: blocks, isLoading } = useBlockList(1, 5);
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Block</TableHead>
          <TableHead>Hash</TableHead>
          <TableHead className="text-right">Gas Used</TableHead>
          <TableHead className="text-right">Gas Limit</TableHead>
          <TableHead className="text-right w-[150px]">Miner</TableHead>
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
                <TableCell className="text-right">
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5 w-24" />
                </TableCell>
              </TableRow>
            ))
          : blocks?.data.map((block) => (
              <TableRow key={block.number} className="h-14">
                <TableCell>
                  <Link
                    href={`/blocks/${block.number}`}
                    className="flex items-center gap-2 text-blue-700 hover:underline"
                  >
                    <div className="bg-secondary text-muted-foreground p-3 rounded">
                      <CubeIcon className="h-5 w-5" />
                    </div>
                    {block.number}
                  </Link>
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href={`/blocks/${block.hash}`}>
                          {formatHash(block.hash)}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{block.hash}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell className="text-right">
                  {block.gasUsed
                    ? Number.parseInt(block.gasUsed, 16).toLocaleString()
                    : "N/A"}
                </TableCell>
                <TableCell className="text-right">
                  {Number.parseInt(block.gasLimit, 16).toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href={`/address/${block.miner}`}>
                          {formatHash(block.miner)}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{block.miner}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
