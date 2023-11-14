"use client";

import CurrentBalance from "@/components/CurrentBalanceCard";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import { useGetExpenses } from "@/hooks/useGetExpenses";
import TransactionChart from "@/components/charts/TransactionChart";
import LatestTransactions from "@/components/LatestTransactions";

export default function Dashboard() {
  const { data: incomeData } = useGetIncomes();
  const { data: expenseData } = useGetExpenses();

  const incomes =
    incomeData?.map((income) => ({
      ...income,
      amount: parseFloat(income.amount),
    })) || [];

  const expenses =
    expenseData?.map((expense) => ({
      ...expense,
      amount: parseFloat(expense.amount),
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
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Dashboard</div>
        <div className="text-muted-foreground">Welcome back Kennedy!</div>
        <div className="py-3">
          <CurrentBalance currentBalance={currentBalance} />
        </div>
        <div className="flex items-start space-x-5">
          <TransactionChart incomes={incomes} expenses={expenses} />
          <LatestTransactions incomes={incomes} expenses={expenses} />
        </div>
      </div>
    </>
  );
}
