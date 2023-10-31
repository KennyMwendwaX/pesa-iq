"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Crypto() {
  const { data } = useQuery({
    queryKey: ["coins"],
    queryFn: async () => {
      const { data } = await axios.get("/api/crypto/coins");
      return data.coins;
    },
  });
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">Crypto</div>
    </>
  );
}
