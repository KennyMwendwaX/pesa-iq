"use client";

import MMFTable from "@/components/MMFTable/Table";
import { MMFTableColumns } from "@/components/MMFTable/TableColumns";
import { moneyMarketFund } from "@/lib/MoneyMarketFund";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function MMF() {
  const { data: session, status } = useSession();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="flex items-center justify-between space-y-2 pb-3">
          <div>
            <div className="text-2xl font-bold tracking-tight">
              Top 15 best performing Money Market Fund in 2023
            </div>
            <p className="text-muted-foreground">
              Here&apos;s a list of best Money Market Fund ranked by their
              annual percentage yield!
            </p>
          </div>
        </div>
        {moneyMarketFund && moneyMarketFund.length > 0 ? (
          <MMFTable data={moneyMarketFund} columns={MMFTableColumns} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
}
