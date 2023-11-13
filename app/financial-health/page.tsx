"use client";

import { useGetExpenses } from "@/hooks/useGetExpenses";
import { useGetIncomes } from "@/hooks/useGetIncomes";
import { calculateFinancialHealthScore } from "@/lib/financialHealthScore";

export default function FinancialHealth() {
  const { data: incomeData } = useGetIncomes();
  const { data: expenseData } = useGetExpenses();

  const incomes = incomeData || [];
  const expenses = expenseData || [];

  calculateFinancialHealthScore({ incomes, expenses });

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">
          Financial Health
        </div>
      </div>
    </>
  );
}
