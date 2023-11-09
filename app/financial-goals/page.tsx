"use client";

import AddFinancialGoalModal from "@/components/AddFinancialGoalModal";
import InProgressGoalCard from "@/components/InProgressGoalCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Goal = {
  id: string;
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

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight mx-auto">
          Financial Goals
        </div>
        <AddFinancialGoalModal />
        <Tabs defaultValue="in-progress" className="w-[600px] pt-4">
          <TabsList className="grid w-full grid-cols-2 mx-auto">
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="password">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="in-progress">
            <div className="pt-4 space-y-2">
              {inProgressGoals && inProgressGoals.length > 0 ? (
                inProgressGoals.map((goal) => (
                  <InProgressGoalCard key={goal.id} goal={goal} />
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
