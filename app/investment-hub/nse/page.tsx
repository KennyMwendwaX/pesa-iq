"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { NSEStockData } from "@/types/NSEStockData";
import NSEStockTable from "@/components/NSETable/Table";
import { TableColumns } from "@/components/NSETable/TableColumns";

export default function NSE() {
  const { data } = useQuery({
    queryKey: ["nseStockData"],
    queryFn: async () => {
      const { data } = await axios.get("/api/nse");
      return data.NSE_Stocks as NSEStockData[];
    },
  });
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="flex items-center justify-between space-y-2 pb-3">
          <div>
            <div className="text-2xl font-bold tracking-tight">
              Real Time Nairobi Stock Exchange Stocks
            </div>
            <p className="text-muted-foreground">
              Here&apos;s a list of NSE Stocks!
            </p>
          </div>
        </div>

        {data && data.length > 0 ? (
          <NSEStockTable data={data} columns={TableColumns} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
}
