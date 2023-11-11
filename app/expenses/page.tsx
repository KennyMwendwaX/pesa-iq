"use client";

import AddExpenseModal from "@/components/expense/AddExpenseModal";
import ExpenseCard from "@/components/expense/ExpenseCard";
import { formatKESCurrency } from "@/lib/formatCurrency";
import { useGetExpenses } from "@/hooks/useGetExpenses";
import type { ExpenseTypes } from "@/hooks/useGetExpenses";
import TotalExpenseCard from "@/components/expense/TotalExpenseCard";

export default function Expense() {
  const { data } = useGetExpenses();

  const expenses = data?.sort(
    (a: ExpenseTypes, b: ExpenseTypes) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalExpense = expenses?.reduce((acc, expense) => {
    // Use parseFloat to convert the amount from a string to a number
    const expenseAmount = parseFloat(expense.amount);

    // Add the expense amount to the accumulator
    return acc + expenseAmount;
  }, 0);

  const topExpenses = data
    ?.sort(
      (a: ExpenseTypes, b: ExpenseTypes) =>
        parseInt(b.amount) - parseInt(a.amount)
    )
    .slice(0, 5);

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Expenses</div>
        <div className="flex justify-between pt-3">
          <div className="w-[800px]">
            <div className="pb-3">
              <TotalExpenseCard />
            </div>
            <div className="w-full space-y-2">
              <AddExpenseModal />
              {expenses && expenses.length > 0 ? (
                expenses.map((expense) => (
                  <ExpenseCard key={expense.id} expense={expense} />
                ))
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </div>
          <div className="border border-gray-400 rounded-xl h-[350px] w-[400px]">
            <div className="text-xl font-bold tracking-tight pt-2 pl-2">
              Top Expenses
            </div>
            <div className="px-3 pt-3 space-y-6">
              {topExpenses && topExpenses.length > 0 ? (
                topExpenses.map((expense) => {
                  const expenseAmount = parseInt(expense.amount);
                  const expensePercentage = totalExpense
                    ? (expenseAmount / totalExpense) * 100
                    : 0;
                  return (
                    <div key={expense.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-red-700">
                          {expense.name}
                        </span>
                        <span className="text-sm font-medium text-red-700">
                          {formatKESCurrency(expenseAmount)}
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
    </>
  );
}
