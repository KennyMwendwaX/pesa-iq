"use client";

import CryptoOverview from "@/components/CryptoOverview";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { CoinData } from "@/types/Crypto";
import CryptoTable from "@/components/CryptoTable/Table";
import { CryptoTableColumns } from "@/components/CryptoTable/TableColumns";

export default function Crypto() {
  const { data } = useQuery({
    queryKey: ["coins"],
    queryFn: async () => {
      const { data } = await axios.get("/api/investment-hub/crypto");
      return data.coins as CoinData;
    },
  });

  const stats = data?.data.stats;
  const coinData = data?.data.coins;

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <CryptoOverview stats={stats} />
        {coinData && coinData.length > 0 ? (
          <CryptoTable data={coinData} columns={CryptoTableColumns} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
}
