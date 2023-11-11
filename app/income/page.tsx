"use client";

import AddIncomeModal from "@/components/income/AddIncomeModal";
import IncomeCard from "@/components/income/IncomeCard";
import { formatKESCurrency } from "@/lib/formatCurrency";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import type { IncomeTypes } from "@/hooks/useGetIncomes";
import TotalIncomeCard from "@/components/income/TotalIncomeCard";

export default function Income() {
  const { data } = useGetIncomes();

  const incomes = data?.sort(
    (a: IncomeTypes, b: IncomeTypes) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalIncome = incomes?.reduce((acc, income) => {
    // Use parseFloat to convert the amount from a string to a number
    const incomeAmount = parseFloat(income.amount);

    // Add the income amount to the accumulator
    return acc + incomeAmount;
  }, 0);

  const topIncomes = data
    ?.sort(
      (a: IncomeTypes, b: IncomeTypes) =>
        parseInt(b.amount) - parseInt(a.amount)
    )
    .slice(0, 5);

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Income</div>

        <div className="flex justify-between pt-3">
          <div className="w-[800px]">
            <div className="pb-3">
              <TotalIncomeCard />
            </div>
            <div className="w-full space-y-2">
              <AddIncomeModal />
              {incomes && incomes.length > 0 ? (
                incomes.map((income) => (
                  <IncomeCard key={income.id} income={income} />
                ))
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </div>
          <div className="border border-gray-400 rounded-xl h-[350px] w-[400px]">
            <div className="text-xl font-bold tracking-tight pt-2 pl-2">
              Top Incomes
            </div>
            <div className="px-3 pt-3 space-y-6">
              {topIncomes && topIncomes.length > 0 ? (
                topIncomes.map((income) => {
                  const incomeAmount = parseInt(income.amount);
                  const incomePercentage = totalIncome
                    ? (incomeAmount / totalIncome) * 100
                    : 0;
                  return (
                    <div key={income.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-green-700">
                          {income.name}
                        </span>
                        <span className="text-sm font-medium text-green-700">
                          {formatKESCurrency(incomeAmount)}
                        </span>
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: `${incomePercentage}%` }}></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
