"use client";

import CurrentBalance from "@/components/CurrentBalanceCard";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import { useGetExpenses } from "@/hooks/useGetExpenses";
import TransactionChart from "@/components/charts/TransactionChart";
import LatestTransactions from "@/components/LatestTransactions";
import { formatAmount } from "@/lib/formatAmount";
import { calculateFinancialHealthScore } from "@/lib/financialHealthScore";
import FinancialScoreCard from "@/components/FinancialScoreCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const { data: incomeData } = useGetIncomes();
  const { data: expenseData } = useGetExpenses();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }

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

  const totalIncome = incomes
    ? incomes.reduce((acc, income) => {
        // Add the income amount to the accumulator
        return acc + income.amount;
      }, 0)
    : 0;

  const totalExpense = expenses
    ? expenses.reduce((acc, expense) => {
        // Add the expense amount to the accumulator
        return acc + expense.amount;
      }, 0)
    : 0;

  const currentBalance = totalIncome - totalExpense;

  const scores = calculateFinancialHealthScore({
    incomes,
    expenses,
  });
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Dashboard</div>
        <div className="text-muted-foreground">
          Welcome back {session?.user?.name}!
        </div>
        <div className="flex py-3 space-x-5">
          <CurrentBalance currentBalance={currentBalance} />
          <FinancialScoreCard overallScore={scores.overallScore} />
        </div>
        <div className="flex items-start space-x-5 pt-4">
          <TransactionChart incomes={incomes} expenses={expenses} />
          <LatestTransactions incomes={incomes} expenses={expenses} />
        </div>
      </div>
    </>
  );
}
