import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api/apiClient";
import type { BlockDetailsResponse, BlockListResponse } from "@/types/blocks";
import { numberToHex } from "viem";

export const useBlockList = (
  page?: number,
  limit?: number,
  fromBlock?: number,
  toBlock?: number,
) => {
  return useQuery({
    queryKey: ["blockList", page, limit, fromBlock, toBlock],
    queryFn: async () => {
      const response = await apiClient.post<
        BlockListResponse["result"] | undefined
      >("", {
        jsonrpc: "2.0",
        method: "listBlocks",
        params: [
          page,
          limit,
          {
            fromBlock,
            toBlock,
          },
        ],
        id: 1,
      });
      return response?.result;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlockDetails = (blockNumber: string) => {
  return useQuery({
    queryKey: ["blockDetails", blockNumber],
    queryFn: async () => {
      const hexBlockNumber =
        typeof blockNumber === "string" && blockNumber.startsWith("0x")
          ? blockNumber
          : numberToHex(
              typeof blockNumber === "string"
                ? Number.parseInt(blockNumber)
                : blockNumber,
            );

      const response = await apiClient.post<BlockDetailsResponse["result"]>(
        "",
        {
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: [hexBlockNumber, true],
          id: 1,
        },
      );

      return response?.result;
    },
    staleTime: 5 * 60 * 1000,
  });
};
