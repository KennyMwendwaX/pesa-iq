"use client";

import TransactionChart from "@/components/charts/TransactionChart";

export default function Dashboard() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Dashboard</div>
        <div className="text-muted-foreground">Welcome back Kennedy!</div>
        <TransactionChart />
      </div>
    </>
  );
}
