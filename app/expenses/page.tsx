"use client";

import AddExpenseModal from "@/components/AddExpenseModal";
import ExpenseCard from "@/components/ExpenseCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  const expenses = data;

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Expenses</div>
        <AddExpenseModal />
        <div className="flex pt-3">
          <div className="w-[800px] space-y-2">
            {expenses && expenses.length > 0 ? (
              expenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
