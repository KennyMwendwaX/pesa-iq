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
import { useForm } from "react-hook-form";

interface ExpenseFormValues {
  name: string;
  amount: string;
  date: string;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
}

export default function AddExpenseModal() {
  const [date, setDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormValues>();

  async function onSubmit() {}

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
          <form className="space-y-3 px-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative">
                <Label htmlFor="name" className="text-right">
                  Expense Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  className="focus:border-2 focus:border-blue-600"
                  {...register("name")}
                  required
                />
              </div>
              <div className="relative">
                <Label htmlFor="amount" className="text-right">
                  Expense Amount
                </Label>
                <Input
                  type="text"
                  id="amount"
                  className="focus:border-2 focus:border-blue-600"
                  {...register("amount")}
                  required
                />
              </div>
              <div className="grid grid-cols-1 space-y-1">
                {/* Use flex to align label and popover content */}
                <Label htmlFor="date" className="text-left">
                  Expense Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
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
                <Label htmlFor="category" className="text-left">
                  Expense Category
                </Label>
                <Select {...register("category")} required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select expense category" />
                  </SelectTrigger>
                  <SelectContent className="absolute -top-36">
                    <SelectItem value="housing">Housing</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="loan">Loan</SelectItem>
                    <SelectItem value="food">Food & Groceries</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="subscription">Subscription</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="vacation">Vacation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Label htmlFor="frequency" className="text-right">
                  Frequency of expense
                </Label>
                <Select {...register("frequency")} required>
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select the frequency of expense" />
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
                <Label htmlFor="transaction-type" className="text-right">
                  Type of transaction
                </Label>
                <Select {...register("transaction_type")} required>
                  <SelectTrigger id="transaction-type">
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
              <Label htmlFor="amount" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                className="focus:border-2 focus:border-blue-600"
                {...register("description")}
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save Expense</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
