"use client";

import { useGetExpenses } from "@/hooks/useGetExpenses";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import { calculateFinancialHealthScore } from "@/lib/financialHealthScore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { formatAmount } from "@/lib/formatAmount";

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

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">
          Financial Health
        </div>
        <div className="flex justify-between pt-3">
          <div className="w-[800px]">
            <Card className="w-full flex bg-blue-100 border-none rounded-xl">
              <div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base text-blue-600 font-medium">
                    Financial Health Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl text-blue-600 font-bold">
                    {scores.overallScore}/10
                  </div>
                </CardContent>
              </div>
              <div className="ml-auto p-3">
                {parseFloat(scores.overallScore) > 5 ? (
                  <div className="rounded-full bg-green-600 w-12 h-12 flex justify-center items-center">
                    <BsCheckLg className="w-8 h-8 text-green-100" />
                  </div>
                ) : (
                  <div className="rounded-full bg-red-600 w-12 h-12 flex justify-center items-center">
                    <AiOutlineClose className="w-8 h-8 text-red-100" />
                  </div>
                )}
              </div>
            </Card>
          </div>
          <div className="border border-gray-400 rounded-xl h-[230px] w-[400px]">
            <div className="text-xl font-bold tracking-tight pt-2 pl-2">
              Rating Scores
            </div>
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
                  style={{ width: `${incomeStabilityScorePercentage}%` }}></div>
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
        </div>
      </div>
    </>
  );
}
