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
                <Input
                  id="income-name"
                  className="focus:border-2 focus:border-blue-600"
                />
              </div>
              <div className="relative">
                <Label htmlFor="income-amount" className="text-right">
                  Income Amount
                </Label>
                <Input
                  id="income-amount"
                  className="focus:border-2 focus:border-blue-600"
                />
              </div>
              <div className="grid grid-cols-1 space-y-1">
                {/* Use flex to align label and popover content */}
                <Label htmlFor="income-date" className="text-left">
                  Income Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="income-date"
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
              <div className="grid grid-cols-1 space-y-1">
                <Label htmlFor="income-category" className="text-left">
                  Income Category
                </Label>
                <Select>
                  <SelectTrigger id="income-category">
                    <SelectValue placeholder="Select income category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salary">Salary</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="side-business">Side Business</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="stocks">Stocks</SelectItem>
                    <SelectItem value="crypto">Cryptocurrency</SelectItem>
                    <SelectItem value="bonds">Bonds</SelectItem>
                    <SelectItem value="pension">Pension</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Label htmlFor="income-frequency" className="text-right">
                  Frequency of income
                </Label>
                <Select>
                  <SelectTrigger id="income-frequency">
                    <SelectValue placeholder="Select the frequency of income" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Label htmlFor="income-transaction-type" className="text-right">
                  Type of transaction
                </Label>
                <Select>
                  <SelectTrigger id="income-transaction-type">
                    <SelectValue placeholder="Select the frequency of income" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="mobile-banking">
                      Mobile Banking
                    </SelectItem>
                    <SelectItem value="online-payments">
                      Online Payment
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="income-description" className="text-right">
                Description
              </Label>
              <Textarea
                id="income-description"
                className="focus:border-2 focus:border-blue-600"
              />
            </div>
            {/* <div className="flex">
              <Button className="ml-auto " type="submit">
                Add Income
              </Button>
            </div> */}
            <DialogFooter>
              <Button type="submit">Save Income</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
