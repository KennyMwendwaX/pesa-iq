"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Stock } from "@/types/Stocks";
import StocksTable from "@/components/StocksTable/Table";
import { StocksTableColumns } from "@/components/StocksTable/TableColumns";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Stocks() {
  const { data: session, status } = useSession();

  const { data } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data } = await axios.get("/api/investment-hub/stocks");
      return data.stocks.data as Stock[];
    },
  });

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="flex items-center justify-between space-y-2 pb-3">
          <div>
            <div className="text-2xl font-bold tracking-tight">
              Real Time NASDAQ listed stocks
            </div>
            <p className="text-muted-foreground">Search to filter stocks</p>
          </div>
        </div>
        {data && data.length > 0 ? (
          <StocksTable data={data} columns={StocksTableColumns} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
}
