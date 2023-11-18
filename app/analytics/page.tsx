"use client";

import CurrentBalance from "@/components/CurrentBalanceCard";
import TotalIncomeCard from "@/components/income/TotalIncomeCard";
import TotalExpenseCard from "@/components/expense/TotalExpenseCard";
import IncomeCharts from "@/components/charts/IncomeCharts";
import ExpenseCharts from "@/components/charts/ExpenseCharts";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import { useGetExpenses } from "@/hooks/useGetExpenses";
import { formatAmount } from "@/lib/formatAmount";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Analytics() {
  const { data: session, status } = useSession();
  const { data: incomeData } = useGetIncomes();
  const { data: expenseData } = useGetExpenses();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }

  const incomes = incomeData?.map((income) => ({
    ...income,
    amount: formatAmount(parseFloat(income.amount), income.frequency),
  }));

  const totalIncome = incomes
    ? incomes.reduce((acc, income) => {
        // Add the income amount to the accumulator
        return acc + income.amount;
      }, 0)
    : 0;

  const expenses = expenseData?.map((expense) => ({
    ...expense,
    amount: formatAmount(parseFloat(expense.amount), expense.frequency),
  }));

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
        <div className="text-2xl font-bold tracking-tight">Analytics</div>

        <div className="flex space-x-6 pt-3">
          <CurrentBalance currentBalance={currentBalance} />
          <TotalIncomeCard totalIncome={totalIncome} />
          <TotalExpenseCard totalExpense={totalExpense} />
        </div>
        <div className="pt-3">
          <div className="text-xl font-bold tracking-tight">Income</div>
          <IncomeCharts />
        </div>
        <div className="pt-3">
          <div className="text-xl font-bold tracking-tight">Expense</div>
          <ExpenseCharts />
        </div>
      </div>
    </>
  );
}
