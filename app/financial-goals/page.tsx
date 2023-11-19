"use client";

import AddFinancialGoalModal from "@/components/goal/AddFinancialGoalModal";
import InProgressGoalCard from "@/components/goal/InProgressGoalCard";
import FulfilledGoalCard from "@/components/goal/FulfilledGoalCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoalsChart from "@/components/charts/GoalsChart";
import { useGetGoals } from "@/hooks/useGetGoals";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function FinancialGoals() {
  const { data: session, status } = useSession();
  const { data, isLoading } = useGetGoals();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }

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
          {isLoading ? (
            <>
              <div
                className="flex justify-center items-center mx-auto pt-6"
                role="status">
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 text-gray-200 animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
