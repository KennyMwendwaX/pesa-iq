"use client";

import AddExpenseModal from "@/components/AddExpenseModal";
import ExpenseCard from "@/components/ExpenseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FiArrowUpRight } from "react-icons/fi";

type ExpenseTypes = {
  id: string;
  name: string;
  amount: string;
  date: number;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

export default function Expense() {
  const { data } = useQuery({
    queryKey: ["expenseList"],
    queryFn: async () => {
      const { data } = await axios.get("/api/expense");
      return data.expenseList as ExpenseTypes[];
    },
  });

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

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Expenses</div>
        <div className="flex justify-between pt-3">
          <div className="w-[800px]">
            <div className="pb-3">
              <Card className="w-full flex">
                <div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base font-medium">
                      Total Income
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalExpense}</div>
                    <p className="text-sm text-muted-foreground">KES</p>
                  </CardContent>
                </div>
                <div className="ml-auto p-3">
                  <div className="rounded-full bg-red-100 w-12 h-12 flex justify-center items-center">
                    <FiArrowUpRight className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </Card>
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
          <div className="border border-gray-400 h-16 w-[400px]">Top</div>
        </div>
      </div>
    </>
  );
}
