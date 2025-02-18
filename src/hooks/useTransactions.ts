import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api/apiClient";
import type {
  TransactionListResponse,
  TransactionByTxHashResponse,
} from "@/types/transactions";

export const useTransactionList = (
  page?: number,
  limit?: number,
  fromBlock?: number,
  toBlock?: number,
  fromAddress?: string,
  toAddress?: string,
) => {
  return useQuery({
    queryKey: [
      "transactionList",
      page,
      limit,
      fromBlock,
      toBlock,
      fromAddress,
      toAddress,
    ],
    queryFn: async () => {
      const response = await apiClient.post<
        TransactionListResponse["result"] | undefined
      >("", {
        jsonrpc: "2.0",
        method: "listTransactions",
        params: [
          page,
          limit,
          {
            fromBlock,
            toBlock,
            fromAddress,
            toAddress,
          },
        ],
        id: 1,
      });
      return response?.result;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useTransactionByTxHash = (txHash: string) => {
  return useQuery({
    queryKey: ["transactionByTxHash", txHash],
    queryFn: async () => {
      const response = await apiClient.post<
        TransactionByTxHashResponse["result"] | undefined
      >("", {
        jsonrpc: "2.0",
        method: "eth_getTransactionByHash",
        params: [txHash],
        id: 1,
      });
      return response?.result;
    },
    staleTime: 5 * 60 * 1000,
  });
};
