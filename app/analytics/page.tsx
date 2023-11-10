import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiArrowDownLeft } from "react-icons/fi";

export default function page() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Analytics</div>

        <Card className="w-full flex bg-green-100 border-none rounded-xl">
          <div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base text-green-600 font-medium">
                Total Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-green-600 font-bold">
                {/* {totalIncome} */}
              </div>
              <div className="text-sm text-green-600">KES</div>
            </CardContent>
          </div>
          <div className="ml-auto p-3">
            <div className="rounded-full bg-green-600 w-12 h-12 flex justify-center items-center">
              <FiArrowDownLeft className="w-8 h-8 text-green-100" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
