export interface Transaction {
  blockNumber: number;
  createdAt: string;
  error: string | null;
  ethereumTx: string;
  events: Array<Event>;
  fromAddress: string | null;
  gasUsed: number;
  gasWanted: number;
  hasErrorInInternalTransactions: string | null;
  hash: string;
  id: number;
  revertReason: string | null;
  status: string;
  toAdress: string | null;
  updatedAt: string;
}

export interface Transaction {
  accessList: string;
  blockHash: string;
  blockNumber: number;
  chainId: string;
  createdAt: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
    id: number;
  input: string;  
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  nonce: number;
  r: string;
  s: string;
  to: string;
  transactionIndex: number;
  type: string;
  updatedAt: string;
  v: string;
  value: string;
  yParity: string;
}

interface Event {
  type: string;
  attributes: Array<Attribute>;
}

interface Attribute {
  index: boolean;
  key: string;
  value: string;
}

export interface TransactionListResponse {
  result: {
    data: Transaction[];
    metadata: {
      total: number;
    };
  };
}

export interface TransactionByTxHashResponse {
  result: Transaction;
}
