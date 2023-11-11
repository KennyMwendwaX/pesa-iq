"use client";

import { useGetGoals } from "@/hooks/useGetGoals";

export default function GoalsChart() {
  const { data } = useGetGoals();

  return (
    <>
      <div>GoalsChart</div>
    </>
  );
}
