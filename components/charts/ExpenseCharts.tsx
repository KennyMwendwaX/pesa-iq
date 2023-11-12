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
        <Card className="w-[800px] pt-4 px-2">
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
                <XAxis dataKey="date" type="category" />
                <YAxis dataKey="amount" type="number" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="w-[450px] pt-4 px-2">
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
