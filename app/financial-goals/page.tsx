"use client";

import AddFinancialGoalModal from "@/components/AddFinancialGoalModal";
import InProgressGoalCard from "@/components/InProgressGoalCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Goal = {
  name: string;
  amount: string;
  target_date: Date;
  type: string;
  description: string;
  status: "in progress" | "fulfilled";
  createdAt: Date;
};

export default function FinancialGoals() {
  const { data } = useQuery({
    queryKey: ["goalList"],
    queryFn: async () => {
      const { data } = await axios.get("/api/goals");
      return data.goalList as Goal[];
    },
  });

  const inProgressGoals = data?.filter((goal) => goal.status === "in progress");
  console.log(inProgressGoals);

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Financial Goals</div>
        <AddFinancialGoalModal />
        <InProgressGoalCard />
      </div>
    </>
  );
}
