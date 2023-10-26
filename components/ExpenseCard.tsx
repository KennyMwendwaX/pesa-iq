import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoHomeOutline } from "react-icons/io5";
import {
  BsCircleFill,
  BsCurrencyDollar,
  BsFillCalendarEventFill,
  BsThreeDots,
} from "react-icons/bs";
import { BiSolidComment } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";

export default function ExpenseCard() {
  return (
    <>
      <div className="h-28 border border-gray-200 shadow rounded-2xl flex">
        <div className="flex items-center space-x-5">
          <div className="ml-5 p-4 shadow-sm shadow-slate-400 rounded-lg items-center">
            <IoHomeOutline className="w-12 h-12" />
          </div>
          <div className="py-1 space-y-7">
            <div className="items-center flex">
              <div className="items-center flex space-x-3">
                <BsCircleFill className="text-red-600 w-5 h-5" />
                <div>Apartment Rent</div>
              </div>
            </div>
            <div className="items-center flex space-x-5">
              <div className="flex items-center space-x-1">
                <BsCurrencyDollar className="w-5 h-5" />
                <div>10,000</div>
              </div>
              <div className="flex items-center space-x-2">
                <BsFillCalendarEventFill className="w-5 h-5" />
                <div>12/03/2023</div>
              </div>
              <div className="flex items-center space-x-2">
                <BiSolidComment className="w-5 h-5" />
                <div>My march apartment rent</div>
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
                <FiEdit className="text-blue-500 mr-1 w-4 h-4" />
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
