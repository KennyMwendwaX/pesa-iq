import { IncomeTypes } from "@/hooks/useGetIncomes";
import { ExpenseTypes } from "@/hooks/useGetExpenses";

// Calculate average income per month
const calculateAverageIncome = (incomes: IncomeTypes[]) => {
  const totalIncome = incomes.reduce(
    (acc, income) => acc + parseFloat(income.amount),
    0
  );

  return totalIncome;
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

// Calculate expense-to-income ratio
const calculateExpenseToIncomeRatio = ({
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
  const totalExpense = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );

  const expenseToIncomeRatio = (totalExpense / totalIncome) * 100;
  return expenseToIncomeRatio;
};

// Scoring logic for income stability
export const calculateIncomeStabilityScore = (averageIncome: number) => {
  if (averageIncome >= 100000) {
    return 10;
  } else if (averageIncome >= 90000) {
    return 9;
  } else if (averageIncome >= 80000) {
    return 8;
  } else if (averageIncome >= 70000) {
    return 7;
  } else if (averageIncome >= 60000) {
    return 6;
  } else if (averageIncome >= 50000) {
    return 5;
  } else if (averageIncome >= 40000) {
    return 4;
  } else if (averageIncome >= 30000) {
    return 3;
  } else if (averageIncome >= 20000) {
    return 2;
  } else if (averageIncome < 20000) {
    return 1;
  } else {
    return 1;
  }
};

// Scoring logic for savings rate
export const calculateSavingsRateScore = (savingsRate: number) => {
  if (savingsRate >= 50) {
    return 10;
  } else if (savingsRate >= 30) {
    return 8;
  } else if (savingsRate >= 20) {
    return 6;
  } else if (savingsRate >= 5) {
    return 4;
  } else {
    return 2;
  }
};

// Scoring logic for expense-to-income ratio
export const calculateExpenseToIncomeRatioScore = (
  debtToIncomeRatio: number
) => {
  if (debtToIncomeRatio <= 20) {
    return 10;
  } else if (debtToIncomeRatio <= 40) {
    return 8;
  } else if (debtToIncomeRatio <= 60) {
    return 6;
  } else if (debtToIncomeRatio <= 80) {
    return 4;
  } else if (debtToIncomeRatio <= 90) {
    return 2;
  } else {
    return 1;
  }
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
  const debtToIncomeRatio = calculateExpenseToIncomeRatio({
    incomes,
    expenses,
  });

  // Scoring logic based on these metrics
  const incomeStabilityScore = calculateIncomeStabilityScore(averageIncome);
  const savingsRateScore = calculateSavingsRateScore(savingsRate);
  const expenseToIncomeRatioScore =
    calculateExpenseToIncomeRatioScore(debtToIncomeRatio);

  // Calculate overall score based on weights
  const overallScore =
    incomeStabilityScore * 0.4 +
    savingsRateScore * 0.4 +
    expenseToIncomeRatioScore * 0.2;

  return {
    overallScore: overallScore.toFixed(1),
    incomeStabilityScore: incomeStabilityScore.toFixed(1),
    savingsRateScore: savingsRateScore.toFixed(1),
    expenseToIncomeRatioScore: expenseToIncomeRatioScore.toFixed(1),
  };
};
