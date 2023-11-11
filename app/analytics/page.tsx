"use client";

import CurrentBalance from "@/components/CurrentBalanceCard";
import TotalIncomeCard from "@/components/TotalIncomeCard";

export default function Analytics() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Analytics</div>

        <div className="flex space-x-6 pt-3">
          <CurrentBalance />
          <TotalIncomeCard />

          <Card className="w-full flex bg-red-100 border-none rounded-xl">
            <div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base text-red-600 font-medium">
                  Total Expense
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-red-600 font-bold">
                  {totalExpense}
                </div>
                <div className="text-sm text-red-600">KES</div>
              </CardContent>
            </div>
            <div className="ml-auto p-3">
              <div className="rounded-full bg-red-600 w-12 h-12 flex justify-center items-center">
                <FiArrowUpRight className="w-8 h-8 text-red-100" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
