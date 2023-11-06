"use client";

import AddIncomeModal from "@/components/AddIncomeModal";
import IncomeCard from "@/components/IncomeCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type IncomeTypes = {
  id: string;
  name: string;
  amount: string;
  date: number;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

export default function Income() {
  const { data } = useQuery({
    queryKey: ["incomeList"],
    queryFn: async () => {
      const { data } = await axios.get("/api/income");
      return data.incomeList as IncomeTypes[];
    },
  });

  const incomes = data;

  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Income</div>
        <AddIncomeModal />
        <div className="flex pt-3">
          <div className="w-[800px] space-y-2">
            {incomes && incomes.length > 0 ? (
              incomes.map((income) => (
                <IncomeCard key={income.id} income={income} />
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
