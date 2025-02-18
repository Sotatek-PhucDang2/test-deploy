"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatHash, hexToDecimal } from "@/helpers/format"
import { useBlockDetails } from "@/hooks/useBlocks"
import { ArrowLeft, ArrowRight, CuboidIcon as CubeIcon } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function BlockPage() {
  const params = useParams()
  const id = params.id as string
  const { data: blockData, isLoading, isError } = useBlockDetails(id)

  if (isLoading) {
    return <div className="py-10 text-center">Loading block data...</div>
  }

  if (isError) {
    return <div className="py-10 text-center">Error loading block data. Please try again later.</div>
  }

  if (!blockData || !blockData) {
    return <div className="py-10 text-center">No block data found for the given ID.</div>
  }

  const blockNumber = hexToDecimal(blockData.number)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <CubeIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Block #{blockNumber}</h1>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/blocks/${Number(blockNumber) - 1}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={`/blocks/${Number(blockNumber) + 1}`}>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="border rounded-lg">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-1/4">Block Height:</TableCell>
                  <TableCell>{blockNumber}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Timestamp:</TableCell>
                  <TableCell>
                    {new Date(Number(hexToDecimal(blockData.timestamp)) * 1000).toLocaleString()}
                  </TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell className="font-medium">Transactions:</TableCell>
                  <TableCell>{blockData.transactions?.length || 0} transactions</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell className="font-medium">Miner:</TableCell>
                  <TableCell>
                    <Link href={`/address/${blockData.miner}`} className="text-primary hover:underline">
                      {formatHash(blockData.miner)}
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gas Used:</TableCell>
                  <TableCell>
                    {hexToDecimal(blockData.gasUsed).toLocaleString()} (
                    {(
                      (Number(hexToDecimal(blockData.gasUsed)) /
                        Number(hexToDecimal(blockData.gasLimit))) *
                      100
                    ).toFixed(2)}
                    %)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gas Limit:</TableCell>
                  <TableCell>{hexToDecimal(blockData.gasLimit).toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Hash:</TableCell>
                  <TableCell className="break-all">{formatHash(blockData.hash)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Transactions Root:</TableCell>
                  <TableCell className="break-all">{blockData.transactionsRoot}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Parent Hash:</TableCell>
                  <TableCell className="break-all">{formatHash(blockData.parentHash)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nonce:</TableCell>
                  <TableCell>{blockData.nonce}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Difficulty:</TableCell>
                  <TableCell>{hexToDecimal(blockData.difficulty)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Total Difficulty:</TableCell>
                  <TableCell>{hexToDecimal(blockData.totalDifficulty)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Size:</TableCell>
                  <TableCell>{hexToDecimal(blockData.size)} bytes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        {/* <TabsContent value="transactions">
          <div className="border rounded-lg p-4">
            {blockData.transactions && blockData.transactions.length > 0 ? (
              <ul className="space-y-2">
                {blockData.transactions.map((tx: any, index: number) => (
                  <li key={index}>
                    <Link href={`/tx/${tx.hash}`} className="text-primary hover:underline">
                      {formatHash(tx.hash)}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No transactions in this block.</p>
            )}
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}

