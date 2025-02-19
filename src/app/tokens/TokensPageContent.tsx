"use client";

import CopyTooltip from "@/app/address/components/copy-tooltip";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { Skeleton } from "@/components/ui/skeleton";
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
import { useTokens } from "@/hooks/useTokens";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function TokensPageContent() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = 25;
  const { data: tokens, isLoading } = useTokens(page, limit);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">ERC-20 Token List</h1>
      <div className="border rounded-lg overflow-hidden mb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">#</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className="text-right">Symbol</TableHead>
              <TableHead className="text-right hidden md:table-cell">
                Decimals
              </TableHead>
              <TableHead className="text-right hidden lg:table-cell">
                Total Supply
              </TableHead>
              <TableHead className="text-right hidden xl:table-cell">
                Owner
              </TableHead>
              <TableHead className="text-right hidden xl:table-cell">
                Type
              </TableHead>
              <TableHead className="text-right hidden 2xl:table-cell">
                Created At
              </TableHead>
              <TableHead className="text-right hidden 2xl:table-cell">
                Updated At
              </TableHead>
              <TableHead className="text-right hidden xl:table-cell">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading
              ? Array.from({ length: limit }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton className="w-6 h-4" />
                    </TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Skeleton className="w-6 h-6 rounded-full" />
                      <Skeleton className="w-24 h-4" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="w-12 h-4" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="w-12 h-4" />
                    </TableCell>
                    <TableCell className="text-right hidden md:table-cell">
                      <Skeleton className="w-10 h-4" />
                    </TableCell>
                    <TableCell className="text-right hidden lg:table-cell">
                      <Skeleton className="w-20 h-4" />
                    </TableCell>
                    <TableCell className="text-right hidden xl:table-cell">
                      <Skeleton className="w-16 h-4" />
                    </TableCell>
                    <TableCell className="text-right hidden xl:table-cell">
                      <Skeleton className="w-14 h-4" />
                    </TableCell>
                    <TableCell className="text-right hidden 2xl:table-cell">
                      <Skeleton className="w-24 h-4" />
                    </TableCell>
                    <TableCell className="text-right hidden 2xl:table-cell">
                      <Skeleton className="w-24 h-4" />
                    </TableCell>
                    <TableCell className="text-right hidden xl:table-cell">
                      <Skeleton className="w-16 h-4" />
                    </TableCell>
                  </TableRow>
                ))
              : tokens?.data?.map((token, index) => (
                  <TableRow key={token.address}>
                    <TableCell>{index + 1 + (page - 1) * limit}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      {token.logo ? (
                        <Image
                          src={token.logo || "/placeholder.svg"}
                          alt={token.name || "logo"}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="p-2 rounded-full bg-muted">
                          <svg
                            className="w-2 h-2"
                            viewBox="0 0 784.37 1277.39"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <polygon
                                fill="hsl(var(--primary-foreground))"
                                fillRule="nonzero"
                                points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
                              />
                              <polygon
                                fill="hsl(var(--primary-foreground))"
                                fillRule="nonzero"
                                points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
                              />
                              <polygon
                                fill="hsl(var(--primary-foreground))"
                                fillRule="nonzero"
                                points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
                              />
                              <polygon
                                fill="hsl(var(--primary-foreground))"
                                fillRule="nonzero"
                                points="392.07,1277.38 392.07,956.52 -0,724.89"
                              />
                            </g>
                          </svg>
                        </div>
                      )}
                      <div className="font-medium">{token.name || "-"}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CopyTooltip content={token.address} />
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {formatHash(token.address, 6, 6)}
                            </TooltipTrigger>
                            <TooltipContent>{token.address}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {token.symbol || "-"}
                    </TableCell>
                    <TableCell className="text-right hidden md:table-cell">
                      {token.decimals ?? "-"}
                    </TableCell>
                    <TableCell className="text-right hidden lg:table-cell">
                      {token.totalSupply
                        ? Number(token.totalSupply).toLocaleString()
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right hidden xl:table-cell">
                      {token.owner || "-"}
                    </TableCell>
                    <TableCell className="text-right hidden xl:table-cell">
                      {token.type || "-"}
                    </TableCell>
                    <TableCell className="text-right hidden 2xl:table-cell">
                      {token.createdAt
                        ? new Date(token.createdAt).toLocaleDateString()
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right hidden 2xl:table-cell">
                      {token.updatedAt
                        ? new Date(token.updatedAt).toLocaleDateString()
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right hidden xl:table-cell">
                      {token.enabled !== undefined ? (
                        token.enabled ? (
                          <span className="text-green-600 font-semibold">
                            Active
                          </span>
                        ) : (
                          <span className="text-red-600 font-semibold">
                            Disabled
                          </span>
                        )
                      ) : (
                        "-"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
      <PaginationWithLinks
        page={page}
        pageSize={limit}
        totalCount={tokens?.metadata.total || 0}
      />
    </div>
  );
}
