"use client";

import AddFinancialGoalModal from "@/components/goal/AddFinancialGoalModal";
import InProgressGoalCard from "@/components/goal/InProgressGoalCard";
import FulfilledGoalCard from "@/components/goal/FulfilledGoalCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoalsChart from "@/components/charts/GoalsChart";
import { useGetGoals } from "@/hooks/useGetGoals";

export default function FinancialGoals() {
  const { data } = useGetGoals();

  const inProgressGoals = data?.filter((goal) => goal.status === "in progress");
  const fulfilledGoals = data?.filter((goal) => goal.status === "fulfilled");

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight mx-auto pb-2">
          Financial Goals
        </div>
        <AddFinancialGoalModal />
        <div className="flex space-x-5 pt-4">
          <Tabs defaultValue="in-progress" className="w-[800px]">
            <TabsList className="grid w-full grid-cols-2 mx-auto">
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="fulfilled">Completed</TabsTrigger>
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
            <TabsContent value="fulfilled">
              <div className="pt-4 space-y-2">
                {fulfilledGoals && fulfilledGoals.length > 0 ? (
                  fulfilledGoals.map((goal) => (
                    <FulfilledGoalCard key={goal.id} goal={goal} />
                  ))
                ) : (
                  <p>No data available</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
          <GoalsChart />
        </div>
      </div>
    </>
  );
}
