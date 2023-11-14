"use client";

import { useGetIncomes } from "@/hooks/useGetIncomes";
import { useGetExpenses } from "@/hooks/useGetExpenses";
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

export default function TransactionChart() {
  const { data: incomeData } = useGetIncomes();
  const { data: expenseData } = useGetExpenses();

  const incomes = incomeData || [];
  const expenses = expenseData || [];

  // Combine and sort dates from both datasets
  const allDates = Array.from(
    new Set([
      ...incomes.map((item) => item.date),
      ...expenses.map((item) => item.date),
    ])
  );
  allDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  // Create a common dataset with default values for missing dates
  const commonDataset = allDates.map((date) => {
    const incomeItem = incomes.find((item) => item.date === date) || {
      date,
      amount: 0,
    }; // Use appropriate default value
    const expenseItem = expenses.find((item) => item.date === date) || {
      date,
      amount: 0,
    }; // Use appropriate default value

    return {
      date,
      Income: incomeItem.amount,
      Expense: expenseItem.amount,
    };
  });

  const lineChartData = commonDataset.map((item) => ({
    ...item,
    date: format(new Date(item.date), "dd/MM/yyyy"),
  }));

  return (
    <>
      <div className="space-x-5 pt-2">
        <Card className="w-[800px] pt-6 px-2 pb-2">
          <div style={{ width: "100%", height: 300 }}>
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
      </div>
    </>
  );
}
