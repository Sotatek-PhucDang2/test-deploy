import { hexToNumber, isHex } from "viem";
import { formatDistanceToNow } from "date-fns"

export const formatHash = (
  hash: string,
  length: number = 6,
  suffixLength: number = 4,
) => {
  return `${hash?.slice(0, length)}...${hash?.slice(-suffixLength)}`;
};

export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp)
  return formatDistanceToNow(date, { addSuffix: true })
}

export function formatEther(value: string): string {
  const etherValue = Number.parseInt(value) / 1e18
  return etherValue.toFixed(6)
}


export const hexToDecimal = (value: string | number | null | undefined): string => {
  if (value === null || value === undefined) {
    return "N/A"
  }

  if (typeof value === "number") {
    return value.toString()
  }

  if (isHex(value)) {
    try {
      return hexToNumber(value).toString()
    } catch (error) {
      console.error("Error converting hex to number:", error)
      return "Invalid hex"
    }
  }

  return value
}
