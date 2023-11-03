"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

interface TableToolbarProps<TData> {
  table: Table<TData>;
}

export default function SaccoTableToolbar<TData>({
  table,
}: TableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Search saccos..."
            value={(table.getColumn("sacco")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("sacco")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        </div>
      </div>
    </>
  );
}
