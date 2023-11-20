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
  const { data, isLoading } = useGetExpenses();

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
                  {formattedExpenses && formattedExpenses.length > 0 ? (
                    formattedExpenses.map((expense) => (
                      <ExpenseCard key={expense.id} expense={expense} />
                    ))
                  ) : (
                    <div className="flex justify-center pt-20">
                      No data available.
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <Card className="h-[350px] w-[400px] rounded-xl">
            <div className="text-xl font-bold tracking-tight pt-2 pl-2">
              Top Expenses
            </div>
            <div className="px-3 pt-3 space-y-6">
              {isLoading ? (
                <>
                  <div
                    className="flex justify-center items-center mx-auto pt-6"
                    role="status">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 text-gray-200 animate-spin fill-blue-600"
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
                    <div className="flex justify-center pt-20">
                      No data available.
                    </div>
                  )}
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
