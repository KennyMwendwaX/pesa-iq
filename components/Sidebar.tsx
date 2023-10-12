"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, DashboardIcon } from "@radix-ui/react-icons";
import { FaWallet } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { RiGraduationCapLine, RiDonutChartFill } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";

export default function Sidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button className="bg-transparent border border-slate-500 py-1.5 px-2.5">
            <HamburgerMenuIcon className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[350px]">
          <SheetHeader>
            <SheetTitle className="text-2xl">PesaIQ</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center space-x-4">
              <DashboardIcon className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <LuUser2 className="w-5 h-5" />
              <span>Profile</span>
            </div>
            <div className="flex items-center space-x-4">
              <BiWallet className="w-5 h-5" />
              <span>Budget and Savings</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiPieChart className="w-5 h-5" />
              <span>Analytics and Reports</span>
            </div>
            <div className="flex items-center space-x-4">
              <BsTrophy className="w-5 h-5" />
              <span>Financial Goals</span>
            </div>
            <div className="flex items-center space-x-4">
              <AiOutlineDollar className="w-5 h-5" />
              <span>Investment Hub</span>
            </div>
            <div className="flex items-center space-x-4">
              <RiGraduationCapLine className="w-5 h-5" />
              <span>Educational Resources</span>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
