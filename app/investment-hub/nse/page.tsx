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
        {data && data.length > 0 ? (
          <NSEStockTable data={data} columns={TableColumns} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
}
