export type AddressOverview = {
  address: string;
  balance: string;
  balanceUsd: string;
  tokenHoldings: {
    value: string;
    count: number;
  };
  transactions: {
    total: number;
    latest: string;
    first: string;
  };
};

export type Transaction = {
  hash: string;
  method: string;
  block: string;
  age: string;
  from: string;
  to: string;
  value: string;
  txnFee: string;
};

export type InternalTransaction = {
  parentHash: string;
  block: string;
  age: string;
  from: string;
  to: string;
  value: string;
};

export type TokenTransfer = {
  hash: string;
  method: string;
  block: string;
  age: string;
  from: string;
  to: string;
  amount: string;
  token: {
    symbol: string;
    name: string;
    icon?: string;
  };
};

export type NFTTransfer = {
  hash: string;
  method: string;
  block: string;
  age: string;
  from: string;
  to: string;
  type: string;
  item: {
    name: string;
    collection: string;
    icon?: string;
  };
};

export type ProducedBlock = {
  number: string;
  age: string;
  transactions: number;
  difficulty: string;
  gasUsed: {
    amount: string;
    percentage: number;
  };
  reward: string;
};

export type AnalyticsData = {
  ethHighest: {
    value: string;
    date: string;
  };
  ethLowest: {
    value: string;
    date: string;
  };
  usdHighest: {
    value: string;
    date: string;
  };
  usdLowest: {
    value: string;
    date: string;
  };
  timeSeriesData: Array<{
    date: string;
    ethBalance: number;
    usdBalance: number;
  }>;
};
