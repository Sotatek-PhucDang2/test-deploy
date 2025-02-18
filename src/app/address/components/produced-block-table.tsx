import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ProducedBlock } from "@/types/address";
import Link from "next/link";

interface ProducedBlocksTableProps {
  blocks: ProducedBlock[];
}

export function ProducedBlocksTable({ blocks }: ProducedBlocksTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Block</TableHead>
          <TableHead>Age</TableHead>
          <TableHead className="text-right">Txn</TableHead>
          <TableHead>Difficulty</TableHead>
          <TableHead>Gas Used</TableHead>
          <TableHead className="text-right">Reward</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blocks.map((block) => (
          <TableRow key={block.number}>
            <TableCell>
              <Link
                href={`/block/${block.number}`}
                className="text-primary hover:underline"
              >
                {block.number}
              </Link>
            </TableCell>
            <TableCell>{block.age}</TableCell>
            <TableCell className="text-right">{block.transactions}</TableCell>
            <TableCell>{block.difficulty}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${block.gasUsed.percentage}%` }}
                  />
                </div>
                <span className="text-sm">{block.gasUsed.amount}</span>
                <span className="text-sm text-muted-foreground">
                  ({block.gasUsed.percentage}%)
                </span>
              </div>
            </TableCell>
            <TableCell className="text-right">{block.reward} ETH</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
