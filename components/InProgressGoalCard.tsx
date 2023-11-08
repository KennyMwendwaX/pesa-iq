import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  BsCircleFill,
  BsFillCalendarEventFill,
  BsPatchCheck,
  BsThreeDots,
} from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { IoTimerOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";

export default function InProgressGoalCard() {
  return (
    <>
      <div className="h-24 border border-gray-200 shadow-sm rounded-2xl w-[600px] flex">
        <div className="flex items-center space-x-5">
          <div className="ml-5 rounded-full bg-blue-100 w-12 h-12 flex justify-center items-center">
            <GoGoal className="w-8 h-8 text-blue-600" />
          </div>
          <div className="py-1 space-y-4">
            <div className="items-center flex">
              <div className="items-center flex space-x-3">
                <BsCircleFill className="text-blue-600 w-5 h-5" />
                <div>House</div>
              </div>
            </div>
            <div className="items-center flex space-x-5">
              <div className="flex items-center space-x-1">
                <BiDollarCircle className="w-5 h-5" />
                <div>2433</div>
              </div>
              <div className="flex items-center space-x-2">
                <BsFillCalendarEventFill className="w-5 h-5" />
                <div>12/08/2009</div>
              </div>
              <div className="flex items-center space-x-2">
                <IoTimerOutline className="w-6 h-6" />
                <div>Long Term</div>
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
            <DropdownMenuContent align="end" className="w-[170px]">
              <DropdownMenuItem>
                <button className="flex items-center">
                  <BsPatchCheck className="mr-1 w-5 h-5 text-green-500" />
                  Mark As Fulfilled
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LuTrash className="text-red-500 mr-1 w-5 h-5" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
