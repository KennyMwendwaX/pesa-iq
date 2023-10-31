"use client";

import CryptoOverview from "@/components/CryptoOverview";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { CoinData } from "@/types/CryptoCoins";

export default function Crypto() {
  const { data } = useQuery({
    queryKey: ["coins"],
    queryFn: async () => {
      const { data } = await axios.get("/api/crypto/coins");
      return data.coins as CoinData;
    },
  });

  const stats = data?.data.stats;

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <CryptoOverview stats={stats} />
      </div>
    </>
  );
}
