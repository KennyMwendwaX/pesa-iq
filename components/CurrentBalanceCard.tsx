"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function CurrentBalance({
  currentBalance,
}: {
  currentBalance: number;
}) {
  return (
    <>
      <Card className="w-full flex bg-blue-100 border-none rounded-xl">
        <div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base text-blue-600 font-medium">
              Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-600 font-bold">
              {currentBalance}
            </div>
            <div className="text-sm text-blue-600">KES</div>
          </CardContent>
        </div>
        {currentBalance > 0 ? (
          <div className="ml-auto p-3">
            <div className="rounded-full bg-blue-600 w-12 h-12 flex justify-center items-center">
              <BsCheckLg className="w-8 h-8 text-blue-100" />
            </div>
          </div>
        ) : (
          <div className="ml-auto p-3">
            <div className="rounded-full bg-red-600 w-12 h-12 flex justify-center items-center">
              <AiOutlineClose className="w-8 h-8 text-red-100" />
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
