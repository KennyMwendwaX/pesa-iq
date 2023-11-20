"use client";

import { useGetExpenses } from "@/hooks/useGetExpenses";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import { calculateFinancialHealthScore } from "@/lib/financialHealthScore";
import { Card } from "@/components/ui/card";
import { formatAmount } from "@/lib/formatAmount";
import { formatKESCurrency } from "@/lib/formatCurrency";
import FinancialScoreCard from "@/components/FinancialScoreCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function FinancialHealth() {
  const { data: session, status } = useSession();
  const { data: incomeData, isLoading: loadingIncomes } = useGetIncomes();
  const { data: expenseData, isLoading: loadingExpenses } = useGetExpenses();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }

  const isLoading = loadingIncomes && loadingExpenses;

  const incomes =
    incomeData?.map((income) => ({
      ...income,
      amount: formatAmount(parseFloat(income.amount), income.frequency),
    })) || [];

  const expenses =
    expenseData?.map((expense) => ({
      ...expense,
      amount: formatAmount(parseFloat(expense.amount), expense.frequency),
    })) || [];

  const scores = calculateFinancialHealthScore({
    incomes,
    expenses,
  });

  const incomeStabilityScorePercentage =
    (parseFloat(scores.incomeStabilityScore) / 10) * 100;

  const savingsRateScorePercentage =
    (parseFloat(scores.savingsRateScore) / 10) * 100;

  const expenseToIncomeRatioScorePercentage =
    (parseFloat(scores.expenseToIncomeRatioScore) / 10) * 100;

  const totalExpense = expenses.reduce((acc, expense) => {
    // Add the expense amount to the accumulator
    return acc + expense.amount;
  }, 0);

  const topExpenses = expenses.sort((a, b) => b.amount - a.amount).slice(0, 5);

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">
          Financial Health
        </div>
        {isLoading ? (
          <>
            <div
              className="flex justify-center items-center mx-auto pt-6"
              role="status">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between pt-3">
              <div className="w-[800px] space-y-5">
                <FinancialScoreCard overallScore={scores.overallScore} />
                <Card className="w-full border-none rounded-xl">
                  <div className="text-xl font-bold tracking-tight pt-2 pl-2">
                    Rating Scores
                  </div>
                  <div className="space-y-3">
                    <div className="px-3 pt-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-base font-medium text-blue-700">
                          Income Stability
                        </span>
                        <span className="text-sm font-medium text-blue-700">
                          {scores.incomeStabilityScore}/10
                        </span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full"
                          style={{
                            width: `${incomeStabilityScorePercentage}%`,
                          }}></div>
                      </div>
                    </div>
                    <div className="px-3 pt-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-base font-medium text-blue-700">
                          Savings Rate
                        </span>
                        <span className="text-sm font-medium text-blue-700">
                          {scores.savingsRateScore}/10
                        </span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full"
                          style={{
                            width: `${savingsRateScorePercentage}%`,
                          }}></div>
                      </div>
                    </div>
                    <div className="px-3 py-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-base font-medium text-blue-700">
                          Expense To Income Rate
                        </span>
                        <span className="text-sm font-medium text-blue-700">
                          {scores.expenseToIncomeRatioScore}/10
                        </span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full"
                          style={{
                            width: `${expenseToIncomeRatioScorePercentage}%`,
                          }}></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <Card className="h-[350px] w-[400px] rounded-xl">
                <div className="text-xl font-bold tracking-tight pt-2 pl-2">
                  Top Expenses To Reduce
                </div>
                <div className="px-3 pt-3 space-y-6">
                  {topExpenses && topExpenses.length > 0 ? (
                    topExpenses.map((expense) => {
                      const expensePercentage = totalExpense
                        ? (expense.amount / totalExpense) * 100
                        : 0;
                      return (
                        <div key={expense.id}>
                          <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-red-700">
                              {expense.name}
                            </span>
                            <span className="text-sm font-medium text-red-700">
                              {formatKESCurrency(expense.amount)}
                            </span>
                          </div>
                          <div className="w-full bg-red-100 rounded-full h-2.5">
                            <div
                              className="bg-red-600 h-2.5 rounded-full"
                              style={{
                                width: `${expensePercentage}%`,
                              }}></div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex justify-center pt-20">
                      No data available.
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
    </>
  );
}
