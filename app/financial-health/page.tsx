"use client";

import { useGetExpenses } from "@/hooks/useGetExpenses";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import { calculateFinancialHealthScore } from "@/lib/financialHealthScore";
import { Card } from "@/components/ui/card";
import { formatAmount } from "@/lib/formatAmount";
import { formatKESCurrency } from "@/lib/formatCurrency";
import FinancialScoreCard from "@/components/FinancialScoreCard";

export default function FinancialHealth() {
  const { data: incomeData } = useGetIncomes();
  const { data: expenseData } = useGetExpenses();

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
                      style={{ width: `${savingsRateScorePercentage}%` }}></div>
                  </div>
                </div>
                <div className="px-3 pt-3 space-y-2">
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
          <div className="w-[400px] space-y-4">
            <div className="border border-gray-400 rounded-xl h-[350px] w-full">
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
                            style={{ width: `${expensePercentage}%` }}></div>
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
      </div>
    </>
  );
}
