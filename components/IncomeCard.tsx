import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare, FaMoneyBillTrendUp } from "react-icons/fa6";
import {
  BsCircleFill,
  BsCurrencyDollar,
  BsFillCalendarEventFill,
  BsThreeDots,
} from "react-icons/bs";
import { BiDollarCircle, BiSolidComment } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { FiArrowDownLeft, FiEdit } from "react-icons/fi";
import { FaCommentAlt } from "react-icons/fa";
import { format } from "date-fns";

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

type Props = {
  income: IncomeTypes;
};

export default function IncomeCard({ income }: Props) {
  const rawDate = income.date;
  const date = new Date(rawDate);
  const formattedDate = format(date, "dd/MM/yyyy");

  return (
    <>
      <div className="h-24 border border-gray-200 shadow-sm rounded-2xl flex">
        <div className="flex items-center space-x-5">
          <div className="ml-5 rounded-full bg-green-100 w-12 h-12 flex justify-center items-center">
            <FiArrowDownLeft className="w-8 h-8 text-green-600" />
          </div>
          <div className="py-1 space-y-4">
            <div className="items-center flex">
              <div className="items-center flex space-x-3">
                <BsCircleFill className="text-green-600 w-5 h-5" />
                <div>{income.name}</div>
              </div>
            </div>
            <div className="items-center flex space-x-5">
              <div className="flex items-center space-x-1">
                <BiDollarCircle className="w-5 h-5" />
                <div>{income.amount}</div>
              </div>
              <div className="flex items-center space-x-2">
                <BsFillCalendarEventFill className="w-5 h-5" />
                <div>{formattedDate}</div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCommentAlt className="w-5 h-5" />
                <div>{income.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                <BsThreeDots className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem className="cursor-pointer">
                <FaArrowUpRightFromSquare className="mr-1 w-4 h-4" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <FiEdit className="mr-1 w-4 h-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LuTrash className="text-red-500 mr-1 w-4 h-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
