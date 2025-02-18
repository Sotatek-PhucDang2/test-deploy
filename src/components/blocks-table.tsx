import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatHash } from "@/helpers/format";
import type { Block } from "@/types/blocks";
import { CuboidIcon as CubeIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "./ui/skeleton";

interface BlocksTableProps {
  blocks: Block[] | undefined;
  isLoading: boolean;
}

export function BlocksTable({ blocks, isLoading }: BlocksTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Block</TableHead>
          <TableHead>Hash</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Miner</TableHead>
          <TableHead className="hidden lg:table-cell">Gas Limit</TableHead>
          <TableHead className="text-right">Difficulty</TableHead>
          <TableHead className="hidden lg:table-cell">
            Transactions Root
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
                  <Skeleton className="h-5 w-32" />
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
          : blocks?.map((block) => (
              <TableRow key={block.id}>
                <TableCell>
              <Link
                href={`/blocks/${block.number}`}
                className="flex items-center gap-2 text-blue-700 hover:underline"
              >
                <CubeIcon className="h-4 w-4" />
                {block.number}
              </Link>
            </TableCell>
            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {formatHash(block.hash, 6, 6)}
                  </TooltipTrigger>
                  <TooltipContent>{block.hash}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {block.blockStatus}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {formatHash(block.miner, 6, 6)}
                  </TooltipTrigger>
                  <TooltipContent>{block.miner}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {Number.parseInt(block.gasLimit, 16).toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              {Number.parseInt(block.difficulty, 16).toLocaleString()}
            </TableCell>
            {/* <TableCell className="hidden lg:table-cell">{block.timestamp}</TableCell> */}
            <TableCell className="hidden lg:table-cell">
              <Link
                href={`/tx/${block.transactionsRoot}`}
                className="text-blue-700 hover:underline"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {formatHash(block.transactionsRoot, 6, 6)}
                    </TooltipTrigger>

                    <TooltipContent>{block.transactionsRoot}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
