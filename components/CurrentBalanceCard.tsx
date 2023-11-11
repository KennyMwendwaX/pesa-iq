"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import type { IncomeTypes } from "@/hooks/useGetIncomes";
import { useGetExpenses } from "@/hooks/useGetExpenses";
import type { ExpenseTypes } from "@/hooks/useGetExpenses";

export default function CurrentBalance() {
  const { data: incomeData } = useGetIncomes();
  const { data: expenseData } = useGetExpenses();

  const incomes = incomeData?.sort(
    (a: IncomeTypes, b: IncomeTypes) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalIncome = incomes
    ? incomes.reduce((acc, income) => {
        // Use parseFloat to convert the amount from a string to a number
        const incomeAmount = parseFloat(income.amount);

        // Add the income amount to the accumulator
        return acc + incomeAmount;
      }, 0)
    : 0;

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

  const currentBalance = totalIncome - totalExpense;
  return (
    <>
      <Card className="w-full flex bg-blue-100 border-none rounded-xl">
        <div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base text-blue-600 font-medium">
              Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-600 font-bold">
              {currentBalance}
            </div>
            <div className="text-sm text-blue-600">KES</div>
          </CardContent>
        </div>
        {currentBalance > 0 ? (
          <div className="ml-auto p-3">
            <div className="rounded-full bg-blue-600 w-12 h-12 flex justify-center items-center">
              <BsCheckLg className="w-8 h-8 text-blue-100" />
            </div>
          </div>
        ) : (
          <div className="ml-auto p-3">
            <div className="rounded-full bg-red-600 w-12 h-12 flex justify-center items-center">
              <AiOutlineClose className="w-8 h-8 text-red-100" />
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
