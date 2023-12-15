import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  BsCircleFill,
  BsFillCalendarEventFill,
  BsThreeDots,
} from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { FiArrowDownLeft, FiEdit } from "react-icons/fi";
import { FaCommentAlt } from "react-icons/fa";
import { format } from "date-fns";
import { formatKESCurrency } from "@/lib/formatCurrency";
import { useDeleteIncome } from "@/hooks/useDeleteIncome";
import { useRouter } from "next/navigation";

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

type Props = {
  income: IncomeTypes;
};

export default function IncomeCard({ income }: Props) {
  const router = useRouter();
  const { deleteIncome } = useDeleteIncome();

  const rawDate = income.date;
  const date = new Date(rawDate);
  const formattedDate = format(date, "dd/MM/yyyy");

  const incomeDelete = async (incomeId: string) => {
    deleteIncome(incomeId);
    router.refresh();
  };
  return (
    <>
      <div className="bg-white h-24 border border-gray-200 shadow-sm rounded-2xl flex">
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
                <div>{formatKESCurrency(income.amount)}</div>
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
                <button
                  onClick={() => incomeDelete(income.id)}
                  className="flex items-center">
                  <LuTrash className="text-red-500 mr-1 w-5 h-5" />
                  Delete
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
