import { ExpenseTypes } from "@/hooks/useGetExpenses";
import { IncomeTypes } from "@/hooks/useGetIncomes";

// Calculate average income per month
export const calculateAverageIncome = (incomes: IncomeTypes[]) => {
  const totalIncome = incomes.reduce(
    (acc, income) => acc + parseFloat(income.amount),
    0
  );
  const averageIncome = totalIncome / incomes.length;
  return averageIncome;
};

// Calculate savings rate
const calculateSavingsRate = async ({
  incomes,
  expenses,
}: {
  incomes: IncomeTypes[];
  expenses: ExpenseTypes[];
}) => {
  const totalIncome = incomes.reduce(
    (acc, income) => acc + parseFloat(income.amount),
    0
  );
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );

  const savingsRate = ((totalIncome - totalExpenses) / totalIncome) * 100;
  return savingsRate;
};
