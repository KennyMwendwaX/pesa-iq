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
import {
  BsCircleFill,
  BsCurrencyDollar,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { FiTrash } from "react-icons/fi";

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
            <div className="h-28 border border-slate-500 rounded-xl flex items-center">
              <div className="flex space-x-5">
                <div className="ml-5 p-4 shadow-sm shadow-slate-400 rounded-lg items-center">
                  <FaMoneyBillTrendUp className="w-12 h-12" />
                </div>
                <div className="py-1 space-y-7">
                  <div className="items-center flex space-x-3">
                    <BsCircleFill className="text-green-600 w-5 h-5" />
                    <div>Developer Salary</div>
                  </div>
                  <div className="items-center flex space-x-5">
                    <div className="flex items-center space-x-1">
                      <BsCurrencyDollar className="w-5 h-5" />
                      <div>10,000</div>
                    </div>
                    <div className="space-x-1">
                      <BsFillCalendarEventFill className="w-5 h-5" />
                      <div>12/03/2023</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <FiTrash className="justify-end" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
