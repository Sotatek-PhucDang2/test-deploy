import apiClient from "@/lib/api/apiClient";
import { TokenListResponse } from "@/types/tokens";
import { useQuery } from "@tanstack/react-query";

export const useTokens = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["tokens", page, limit],
    queryFn: async () => {
      const response = await apiClient.post<
        TokenListResponse["result"] | undefined
      >("", {
        jsonrpc: "2.0",
        method: "eth_getTokensByPageAndSize",
        params: [page, limit],
        id: 1,
      });
      console.log("response", response);
      return response?.result;
    },
  });
};
