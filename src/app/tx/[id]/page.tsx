"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTransactionByTxHash } from "@/hooks/useTransactions";
import { AlertTriangle, ArrowLeft, ArrowRight, FileIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TransactionPage() {
  const params = useParams();
  const id = params.id as string;
  const { data, isLoading, isError, error } = useTransactionByTxHash(id);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (isError || !data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="h-6 w-6 text-red-500" />
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
        </div>
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">
            Transaction not found or invalid!{" "}
          </strong>
          <span className="block sm:inline">
            {error instanceof Error
              ? error.message
              : "An unknown error occurred"}
          </span>
        </div>
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const transaction = data;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <FileIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Transaction Details</h1>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="state">State</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="border rounded-lg">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-1/4">
                    Transaction Hash:
                  </TableCell>
                  <TableCell>{id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Status:</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Success
                    </span>
                  </TableCell>
                </TableRow>
                {transaction &&
                  Object.entries(transaction).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium">{key}:</TableCell>
                      <TableCell className="break-all">
                        {typeof value === "object"
                          ? JSON.stringify(value)
                          : String(value)}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="logs">
          <div className="border rounded-lg p-4">
            <p>Transaction logs will be displayed here.</p>
          </div>
        </TabsContent>
        <TabsContent value="state">
          <div className="border rounded-lg p-4">
            <p>State changes will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
