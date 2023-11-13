import { ExpenseTypes } from "@/hooks/useGetExpenses";
import { IncomeTypes } from "@/hooks/useGetIncomes";

// Calculate average income per month
const calculateAverageIncome = (incomes: IncomeTypes[]) => {
  const totalIncome = incomes.reduce(
    (acc, income) => acc + parseFloat(income.amount),
    0
  );
  const averageIncome = totalIncome / incomes.length;
  return averageIncome;
};

// Calculate savings rate
const calculateSavingsRate = ({
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

// Calculate debt-to-income ratio
const calculateDebtToIncomeRatio = ({
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
  const totalDebt = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );

  const debtToIncomeRatio = (totalDebt / totalIncome) * 100;
  return debtToIncomeRatio;
};

// Calculate overall financial health score
export const calculateFinancialHealthScore = ({
  incomes,
  expenses,
}: {
  incomes: IncomeTypes[];
  expenses: ExpenseTypes[];
}) => {
  const averageIncome = calculateAverageIncome(incomes);
  const savingsRate = calculateSavingsRate({ incomes, expenses });
  const debtToIncomeRatio = calculateDebtToIncomeRatio({ incomes, expenses });

  // You can define your own scoring logic based on these metrics
  // const incomeStabilityScore = calculateIncomeStabilityScore(averageIncome);
  // const savingsRateScore = calculateSavingsRateScore(savingsRate);
  // const debtToIncomeRatioScore = calculateDebtToIncomeRatioScore(debtToIncomeRatio);

  // Calculate overall score based on weights
  // const overallScore = (incomeStabilityScore * 0.4) + (savingsRateScore * 0.4) + (debtToIncomeRatioScore * 0.2);

  // return overallScore;
};
