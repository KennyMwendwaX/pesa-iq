"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { RxDashboard } from "react-icons/rx";
import { LuUser2 } from "react-icons/lu";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { BiShieldPlus } from "react-icons/bi";
import { FiPieChart } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { RiGraduationCapLine } from "react-icons/ri";
import { Session } from "next-auth";

type Props = {
  session: Session | null;
};

export default function Sidebar({ session }: Props) {
  return (
    <>
      <Sheet>
        <Button
          className="bg-transparent border border-slate-500 py-1.5 px-2.5"
          asChild>
          <SheetTrigger>
            <HamburgerMenuIcon className="w-5 h-5" />
          </SheetTrigger>
        </Button>
        <SheetContent side="left" className="w-[350px] rounded-r-2xl">
          <SheetHeader>
            <SheetTitle className="ml-2 text-3xl">PesaIQ</SheetTitle>
          </SheetHeader>
          <div className="space-y-1.5 pt-2">
            <Link
              href="/dashboard"
              className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <RxDashboard className="ml-2 w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            {/* <div className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <LuUser2 className="ml-2 w-5 h-5" />
              <span>Profile</span>
            </div> */}
            <Link
              href="/income"
              className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <FaArrowTrendUp className="ml-2 w-5 h-5" />
              <span>Income</span>
            </Link>
            <Link
              href="/expenses"
              className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <FaArrowTrendDown className="ml-2 w-5 h-5" />
              <span>Expenses</span>
            </Link>
            <Link
              href="/financial-goals"
              className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <BsTrophy className="ml-2 w-5 h-5" />
              <span>Financial Goals</span>
            </Link>
            <Link
              href="/analytics"
              className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <FiPieChart className="ml-2 w-5 h-5" />
              <span>Analytics</span>
            </Link>
            <Link
              href="/financial-health"
              className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <BiShieldPlus className="ml-1 w-6 h-6" />
              <span>Financial Health</span>
            </Link>
            <Link
              href="/investment-hub"
              className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <AiOutlineDollar className="ml-1 w-6 h-6" />
              <span>Investment Hub</span>
            </Link>
            <div className="flex items-center py-2 space-x-4 rounded-lg cursor-pointer hover:bg-slate-200">
              <RiGraduationCapLine className="ml-2 w-5 h-5" />
              <span>Finance Articles</span>
            </div>
          </div>
          <div className="absolute bottom-2 px-3 flex items-center space-x-2 bg-slate-200 rounded-xl">
            <Avatar>
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>
                <LuUser2 className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            <div className="py-2 space-y-1">
              <div className="pt-1">{session?.user?.name}</div>
              <span className="text-muted-foreground text-sm pb-1">
                {session?.user?.email}
              </span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
