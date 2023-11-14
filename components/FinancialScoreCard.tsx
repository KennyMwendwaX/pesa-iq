"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { calculateFinancialHealthScore } from "@/lib/financialHealthScore";

type IncomeTypes = {
  id: string;
  name: string;
  amount: number;
  date: Date;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

type ExpenseTypes = {
  id: string;
  name: string;
  amount: number;
  date: number;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

type Props = {
  overallScore: string;
};

export default function FinancialScoreCard({ overallScore }: Props) {
  return (
    <>
      <Card className="w-full flex bg-blue-100 border-none rounded-xl">
        <div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base text-blue-600 font-medium">
              Financial Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl text-blue-600 font-bold">
              {overallScore}/10
            </div>
          </CardContent>
        </div>
        <div className="ml-auto p-3">
          {parseFloat(overallScore) > 5 ? (
            <div className="rounded-full bg-green-600 w-12 h-12 flex justify-center items-center">
              <BsCheckLg className="w-8 h-8 text-green-100" />
            </div>
          ) : (
            <div className="rounded-full bg-red-600 w-12 h-12 flex justify-center items-center">
              <AiOutlineClose className="w-8 h-8 text-red-100" />
            </div>
          )}
        </div>
      </Card>
    </>
  );
}
