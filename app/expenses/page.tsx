"use client";

import AddExpenseModal from "@/components/expense/AddExpenseModal";
import ExpenseCard from "@/components/expense/ExpenseCard";
import { formatKESCurrency } from "@/lib/formatCurrency";
import { useGetExpenses } from "@/hooks/useGetExpenses";
import type { ExpenseTypes } from "@/hooks/useGetExpenses";
import TotalExpenseCard from "@/components/expense/TotalExpenseCard";
import { formatAmount } from "@/lib/formatAmount";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Expense() {
  const { data: session, status } = useSession();
  const { data } = useGetExpenses();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }

  const expenses =
    data?.sort(
      (a: ExpenseTypes, b: ExpenseTypes) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ) || [];

  const formattedExpenses = expenses.map((expense) => ({
    ...expense,
    amount: formatAmount(parseFloat(expense.amount), expense.frequency),
  }));

  const totalExpense = formattedExpenses.reduce((acc, expense) => {
    // Add the expense amount to the accumulator
    return acc + expense.amount;
  }, 0);

  const topExpenses = formattedExpenses
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Expenses</div>
        <div className="flex justify-between pt-3">
          <div className="w-[800px]">
            <div className="pb-3">
              <TotalExpenseCard totalExpense={totalExpense} />
            </div>
            <div className="w-full space-y-2">
              <AddExpenseModal />
              {formattedExpenses && formattedExpenses.length > 0 ? (
                formattedExpenses.map((expense) => (
                  <ExpenseCard key={expense.id} expense={expense} />
                ))
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </div>
          <Card className="h-[350px] w-[400px] rounded-xl">
            <div className="text-xl font-bold tracking-tight pt-2 pl-2">
              Top Expenses
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
          </Card>
        </div>
      </div>
    </>
  );
}
