"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiArrowUpRight } from "react-icons/fi";
import { useGetExpenses } from "@/hooks/useGetExpenses";
import type { ExpenseTypes } from "@/hooks/useGetExpenses";

export default function TotalExpenseCard() {
  const { data: expenseData } = useGetExpenses();

  const expenses = expenseData?.sort(
    (a: ExpenseTypes, b: ExpenseTypes) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalExpense = expenses
    ? expenses.reduce((acc, expense) => {
        // Use parseFloat to convert the amount from a string to a number
        const expenseAmount = parseFloat(expense.amount);

        // Add the expense amount to the accumulator
        return acc + expenseAmount;
      }, 0)
    : 0;
  return (
    <>
      <Card className="w-full flex bg-red-100 border-none rounded-xl">
        <div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base text-red-600 font-medium">
              Total Expense
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-red-600 font-bold">
              {totalExpense}
            </div>
            <div className="text-sm text-red-600">KES</div>
          </CardContent>
        </div>
        <div className="ml-auto p-3">
          <div className="rounded-full bg-red-600 w-12 h-12 flex justify-center items-center">
            <FiArrowUpRight className="w-8 h-8 text-red-100" />
          </div>
        </div>
      </Card>
    </>
  );
}
