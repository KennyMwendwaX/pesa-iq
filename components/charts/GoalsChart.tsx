"use client";

import { useGetGoals } from "@/hooks/useGetGoals";
import { ResponsiveContainer, Tooltip, Legend, PieChart, Pie } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GoalsChart() {
  const { data } = useGetGoals();

  const goalsData = data || [];
  const completedGoalsCount = data?.filter(
    (goal) => goal.status === "fulfilled"
  ).length;
  const inProgressGoalsCount = data?.filter(
    (goal) => goal.status === "in progress"
  ).length;

  const pieChartData = [
    { name: "Goals Completed", value: completedGoalsCount, fill: "#82ca9d" },
    { name: "Goals in Progress", value: inProgressGoalsCount, fill: "#8884d8" },
  ];

  return (
    <>
      <Card className="w-full">
        <div className="text-xl font-bold tracking-tight py-2 pl-2">
          Goal Completion Chart
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              data={pieChartData}
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
      </Card>
    </>
  );
}
