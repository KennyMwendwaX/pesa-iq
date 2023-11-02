"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Stock } from "@/types/Stocks";
import StocksTable from "@/components/StocksTable/Table";
import { StocksTableColumns } from "@/components/StocksTable/TableColumns";

export default function Stocks() {
  const { data } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data } = await axios.get("/api/stocks");
      return data.stocks as Stock[];
    },
  });

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        {data && data.length > 0 ? (
          <StocksTable data={data} columns={StocksTableColumns} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
}
