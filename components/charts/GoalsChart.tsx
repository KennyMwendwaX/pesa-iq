"use client";

import { useGetGoals } from "@/hooks/useGetGoals";
import { ResponsiveContainer, Tooltip, Legend, PieChart, Pie } from "recharts";
import { Card } from "@/components/ui/card";

export default function GoalsChart() {
  const { data } = useGetGoals();

  const goalsData = data || [];
  const completedGoalsCount = goalsData.filter(
    (goal) => goal.status === "fulfilled"
  ).length;
  const inProgressGoalsCount = goalsData.filter(
    (goal) => goal.status === "in progress"
  ).length;

  const pieChartData = [
    { name: "Goals Completed", value: completedGoalsCount, fill: "#82ca9d" },
    { name: "Goals in Progress", value: inProgressGoalsCount, fill: "#8884d8" },
  ];

  return (
    <>
      <Card className="w-[450px]">
        <div className="text-xl font-bold tracking-tight py-2 pl-2">
          Goal Completion Chart
        </div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
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
        </div>
      </Card>
    </>
  );
}
