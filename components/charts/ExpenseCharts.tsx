"use client";

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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/card";
import format from "date-fns/format";

export default function ExpenseCharts() {
  const { data } = useGetExpenses();

  const formattedData =
    data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    ) || [];

  const lineChartData = formattedData.map((item) => ({
    ...item,
    date: format(new Date(item.date), "dd/MM/yyyy"),
    Expense: item.amount, // Rename "amount" to "Expense"
  }));

  const explicitColors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
  ];

  return (
    <>
      <div className="flex space-x-5 pt-2">
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
                <YAxis fontSize={12} dataKey="Expense" type="number" />
                <Tooltip />
                <Legend />
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
        <Card className="w-[450px] pt-6 px-2 pb-2">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="amount"
                  data={formattedData}
                  label
                  cx="50%"
                  cy="40%"
                  innerRadius={70}
                  outerRadius={100}>
                  {formattedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={explicitColors[index % explicitColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </>
  );
}
