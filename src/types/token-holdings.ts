export type TokenHolding = {
  icon: string;
  name: string;
  symbol: string;
  contractAddress: string;
  quantity: string;
  price: number;
  change24h: number;
  value: number;
};

export type TokenHoldingsOverview = {
  netWorthUsd: number;
  netWorthEth: number;
  totalBalanceChange: number;
  assetsInWallet: {
    count: number;
    value: number;
  };
  nftAssets: {
    count: number;
    value: number;
  };
  liquidityPoolAssets: {
    count: number;
    value: number;
  };
};
