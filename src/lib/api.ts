"use server";

export interface Block {
  number: string;
  miner: string;
  minerAddress: string;
  timestamp: string;
  transactions: number;
  gasUsed: string;
  reward: string;
}

export async function fetchBlocks(limit = 10): Promise<Block[]> {
  // In a real implementation, this would fetch from an Ethereum node
  return Array.from({ length: limit }, (_, i) => ({
    number: (21513704 - i).toString(),
    miner: i % 2 === 0 ? "Lido: Execution Layer" : "Titan Builder",
    timestamp: `${i * 12} secs ago`,
    transactions: 45 + i,
    gasUsed: "4,306,589",
    reward: (0.00366 + i * 0.0001).toFixed(5),
    minerAddress: "0xE25358D0A367e706127c",
  }));
}

export interface Transaction {
  hash: string;
  method: string;
  block: string;
  age: string;
  from: string;
  to: string;
  value: string;
  txnFee: string;
}

export async function fetchTransactions(limit = 10): Promise<Transaction[]> {
  // In a real implementation, this would fetch from an Ethereum node
  return Array.from({ length: limit }, (_, i) => ({
    hash: `0x89f471e4e56${i}`,
    method: "Transfer",
    block: (21513704 - i).toString(),
    age: `${i * 15} secs ago`,
    from: "0xE25358D0A367e706127c",
    to: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    value: i % 2 === 0 ? "0" : "0.1",
    txnFee: (0.00014689 + i * 0.0001).toFixed(8),
  }));
}

export interface Token {
  rank: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: string;
  marketCap: string;
}

export async function fetchTokens(limit = 10): Promise<Token[]> {
  return Array.from({ length: limit }, (_, i) => ({
    rank: i + 1,
    name: ["Tether USD", "USD Coin", "BNB", "Chainlink"][i % 4],
    symbol: ["USDT", "USDC", "BNB", "LINK"][i % 4],
    price: 1 + i * 0.01,
    change: i % 2 === 0 ? 0.5 : -0.3,
    volume: `$${(1000000 + i * 100000).toLocaleString()}`,
    marketCap: `$${(1000000000 + i * 10000000).toLocaleString()}`,
  }));
}

export interface NFTContract {
  rank: number;
  name: string;
  floorPrice: number;
  volume: string;
  change: number;
  owners: number;
  items: number;
}

export async function fetchNFTContracts(limit = 10): Promise<NFTContract[]> {
  return Array.from({ length: limit }, (_, i) => ({
    rank: i + 1,
    name: ["Bored Ape Yacht Club", "CryptoPunks", "Azuki", "Doodles"][i % 4],
    floorPrice: 50 + i * 2,
    volume: `${(1000 + i * 100).toLocaleString()} ETH`,
    change: i % 2 === 0 ? 5.5 : -3.2,
    owners: 5000 + i * 100,
    items: 10000,
  }));
}
