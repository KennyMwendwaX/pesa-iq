"use client";

import { useGetIncomes } from "@/hooks/useGetIncomes";
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
} from "recharts";
import { Card } from "@/components/ui/card";
import format from "date-fns/format";

export default function IncomeChart() {
  const { data } = useGetIncomes();

  const formattedData =
    data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    ) || [];

  const lineChartData = formattedData.map((item) => ({
    ...item,
    date: format(new Date(item.date), "dd/MM/yyyy"),
  }));

  return (
    <>
      <div className="flex space-x-5">
        <Card className="w-[600px] pt-4 px-2">
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
                  fill="#8884d8"
                  label
                  cx="50%"
                  cy="40%"
                  innerRadius={70}
                  outerRadius={100}
                />
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
