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
import { AiOutlinePlus } from "react-icons/ai";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AddIncomeModal() {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center space-x-2 rounded-3xl">
            <AiOutlinePlus className="w-4 h-4 text-white" />
            <span>Add Income</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Income</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription> */}
          </DialogHeader>
          <form className="space-y-3 px-3">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative">
                <Label htmlFor="income-name" className="text-right">
                  Income Name
                </Label>
                <Input id="income-name" className="" />
              </div>
              <div className="relative">
                <Label htmlFor="income-amount" className="text-right">
                  Income Amount
                </Label>
                <Input id="income-amount" className="" />
              </div>
              <div className="grid grid-cols-1">
                {/* Use flex to align label and popover content */}
                <Label htmlFor="income-amount" className="text-left">
                  Income Date
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
                <Label htmlFor="income-amount" className="text-left">
                  Income Category
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salary">Salary</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="stocks">Stocks</SelectItem>
                    <SelectItem value="crypto">Cryptocurrency</SelectItem>
                    <SelectItem value="bonds">Bonds</SelectItem>
                    <SelectItem value="pension">Pension</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
