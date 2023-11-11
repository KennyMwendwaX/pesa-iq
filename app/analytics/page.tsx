"use client";

import CurrentBalance from "@/components/CurrentBalanceCard";
import TotalExpenseCard from "@/components/TotalExpenseCard";
import TotalIncomeCard from "@/components/TotalIncomeCard";

export default function Analytics() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Analytics</div>

        <div className="flex space-x-6 pt-3">
          <CurrentBalance />
          <TotalIncomeCard />
          <TotalExpenseCard />
        </div>
      </div>
    </>
  );
}
