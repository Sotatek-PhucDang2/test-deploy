
export interface Token {
  address: string;
  createdAt: string;
  decimals: number;
  enabled: boolean;
  logo: string | null;
  name: string;
  owner: number;
  symbol: string;
  totalSupply: string;
  type: string;
  updatedAt: string;
}
export interface TokenListResponse {
  result: {
    data: Token[];
    metadata: {
      total: number;
    };
  };
}