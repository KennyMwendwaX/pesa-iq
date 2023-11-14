"use client";

import { Card } from "@/components/ui/card";
import { formatKESCurrency } from "@/lib/formatCurrency";
import format from "date-fns/format";

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
  incomes: IncomeTypes[];
  expenses: ExpenseTypes[];
};

export default function LatestTransactions({ incomes, expenses }: Props) {
  const combinedData = [...incomes, ...expenses];

  // Sort the combined array based on the date in descending order
  combinedData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Select the most recent 5 transactions
  const recentTransactions = combinedData.slice(0, 5);

  // Formatting dates
  const formattedRecentTransactions = recentTransactions.map((item) => ({
    ...item,
    date: format(new Date(item.date), "dd/MM/yyyy"),
  }));

  return (
    <>
      <Card>
        <div className="text-lg font-bold tracking-tight w-[450px] pt-2 pl-2">
          Latest Transacations
        </div>
        <div className="relative overflow-x-auto pt-2 pb-1">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Transaction
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {formattedRecentTransactions.map((transaction) => (
                <tr key={transaction.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {transaction.name}
                  </th>
                  <td className="px-6 py-4">{transaction.date}</td>
                  <td className="px-6 py-4">
                    {formatKESCurrency(transaction.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
