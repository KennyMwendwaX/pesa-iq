"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { AiOutlinePlus } from "react-icons/ai";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AddExpenseModal() {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center space-x-2 rounded-3xl">
            <AiOutlinePlus className="w-4 h-4 text-white" />
            <span>Add Expense</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Expense</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription> */}
          </DialogHeader>
          <form className="space-y-3 px-3">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative">
                <Label htmlFor="expense-name" className="text-right">
                  Expense Name
                </Label>
                <Input id="expense-name" className="" />
              </div>
              <div className="relative">
                <Label htmlFor="expense-amount" className="text-right">
                  Expense Amount
                </Label>
                <Input id="expense-amount" className="" />
              </div>
              <div className="grid grid-cols-1">
                {/* Use flex to align label and popover content */}
                <Label htmlFor="expense-amount" className="text-left">
                  Expense Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="select-date"
                      variant={"outline"}
                      className={cn(
                        "justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-1">
                <Label htmlFor="expense-amount" className="text-left">
                  Expense Category
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select expense category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="housing">Housing</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="loan">Loan</SelectItem>
                    <SelectItem value="food">Food & Groceries</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="vacation">Vacation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="expense-amount" className="text-right">
                Description
              </Label>
              <Textarea id="expense-description" />
            </div>
            {/* <div className="flex">
              <Button className="ml-auto " type="submit">
                Add Expense
              </Button>
            </div> */}
            <DialogFooter>
              <Button type="submit">Save Expense</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
