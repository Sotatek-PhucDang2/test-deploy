export interface Block {
  blockStatus: string;
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  id: number;
  logsBloom: string;
  miner: string;
  nonce: string;
  number: number;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  totalDifficulty: string;
  transactionsRoot: string;
  uncles: string[];
}

export interface BlockListResponse {
  id: number;
  jsonrpc: string;
  result: {
    data: Block[];
    metadata: {
      total: number;
      page: number;
      limit: number;
    };
  };
}

export interface BlockDetailsResponse {
  result: Block;
  id: number;
  jsonrpc: string;
}

export interface Transaction {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: string;
  value: string;
  type: string;
  accessList: [];
  chainId: string;
  v: string;
  r: string;
  s: string;
}
