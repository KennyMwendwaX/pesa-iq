import Navbar2 from "@/components/Navbar2";
import AddIncomeModal from "@/components/AddIncomeModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Income() {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Income</div>
        <AddIncomeModal />
        <div className="flex pt-3">
          <div className="w-[800px]">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Income</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">comment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <Progress value={56} />
                  </TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="h-32 border border-slate-500 rounded-xl flex items-center">
              <div className="ml-5 p-6 shadow-sm shadow-slate-400 rounded-lg">
                <FaMoneyBillTrendUp className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
