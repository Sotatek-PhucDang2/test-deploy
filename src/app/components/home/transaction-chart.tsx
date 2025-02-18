"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { date: "Jan 1", transactions: 1.02 },
  { date: "Jan 8", transactions: 2.26 },
  { date: "Jan 15", transactions: 1.89 },
  { date: "Jan 22", transactions: 1.89 },
];

export function TransactionChart() {
  return (
    <div className="h-[100px] w-full">
      <ChartContainer
        config={{
          transactions: {
            label: "Transactions",
            color: "hsl(var(--primary))",
          },
        }}
        className="h-full w-full"
      >
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={data} margin={{ right: 10, left: 5 }}>
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}k`}
              width={30}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="transactions"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary)/0.2)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
