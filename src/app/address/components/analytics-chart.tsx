"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AnalyticsData } from "@/types/address";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AnalyticsChartProps {
  data: AnalyticsData;
}

export function AnalyticsChart({ data }: AnalyticsChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>
          Historical balance and transaction data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="eth-balance" className="space-y-4">
          <TabsList>
            <TabsTrigger value="eth-balance">ETH Balance</TabsTrigger>
            <TabsTrigger value="txn-heatmap">Txn Heatmap</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          <TabsContent value="eth-balance">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm font-medium">ETH Highest Value</div>
                  <div className="text-2xl font-bold">
                    {data.ethHighest.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {data.ethHighest.date}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">ETH Lowest Value</div>
                  <div className="text-2xl font-bold">
                    {data.ethLowest.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {data.ethLowest.date}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">USD Highest Value</div>
                  <div className="text-2xl font-bold">
                    {data.usdHighest.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {data.usdHighest.date}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">USD Lowest Value</div>
                  <div className="text-2xl font-bold">
                    {data.usdLowest.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {data.usdLowest.date}
                  </div>
                </div>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="eth" orientation="left" />
                    <YAxis yAxisId="usd" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="eth"
                      type="monotone"
                      dataKey="ethBalance"
                      stroke="#8884d8"
                      name="ETH Balance"
                    />
                    <Line
                      yAxisId="usd"
                      type="monotone"
                      dataKey="usdBalance"
                      stroke="#82ca9d"
                      name="USD Value"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
