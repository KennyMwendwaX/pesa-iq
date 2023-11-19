"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import Sidebar from "./Sidebar";
import { signOut, useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <nav className="bg-slate-800 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-2">
          <div className="flex items-center space-x-8">
            <div className="space-x-3 items-center">
              <Sidebar session={session} />
              <Link href="/">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-200">
                  PesaIQ
                </span>
                {/* <Image src={Logo} alt="Logo" /> */}
              </Link>
            </div>
          </div>
          <div className="flex md:order-2 items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt="profile-image"
                    />
                    <AvatarFallback>
                      <PersonIcon className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {session?.user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session?.user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button
                    className="flex items-center"
                    onClick={() => signOut()}>
                    <MdLogout className="mr-1 w-4 h-4" />
                    Log out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
