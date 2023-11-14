"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import format from "date-fns/format";

type IncomeTypes = {
  id: string;
  name: string;
  amount: number;
  date: Date;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

type ExpenseTypes = {
  id: string;
  name: string;
  amount: number;
  date: number;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

type Props = {
  incomes: IncomeTypes[];
  expenses: ExpenseTypes[];
};

export default function TransactionChart({ incomes, expenses }: Props) {
  // Combine and sort dates from both datasets
  const allDates = Array.from(
    new Set([
      ...incomes.map((item) => item.date),
      ...expenses.map((item) => item.date),
    ])
  );
  allDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  // Common dataset with default values for missing dates
  const commonDataset = allDates.map((date) => {
    const incomeItem = incomes.find((item) => item.date === date) || {
      date,
      amount: 0,
    }; // default value
    const expenseItem = expenses.find((item) => item.date === date) || {
      date,
      amount: 0,
    }; // default value

    return {
      date,
      Income: incomeItem.amount,
      Expense: expenseItem.amount,
    };
  });

  const lineChartData = commonDataset.map((item) => ({
    ...item,
    date: format(new Date(item.date), "dd/MMM"),
  }));

  return (
    <>
      <Card className="w-[800px] pt-6 px-2 pb-2">
        <div className="text-lg font-bold tracking-tight w-[450px] pt-2 pl-2">
          Transactions Chart
        </div>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <LineChart
              data={lineChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis fontSize={11} dataKey="date" type="category" />
              <YAxis fontSize={12} type="number" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Income"
                stroke="#2ca02c"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Expense"
                stroke="#d62728"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </>
  );
}
