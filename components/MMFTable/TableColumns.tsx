import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { MoneyMarketFund } from "@/types/MoneyMarketFund";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export const MMFTableColumns: ColumnDef<MoneyMarketFund>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select-all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select-row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rank",
    header: () => <TableColumnHeader name="Rank" />,
    cell: ({ row }) => <div className="w-[50px]">{row.getValue("rank")}</div>,
  },
  {
    accessorKey: "name",
    header: () => <TableColumnHeader name="Money Market Fund" />,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "fund_manager",
    header: () => <TableColumnHeader name="Fund Manager" />,
    cell: ({ row }) => <div>{row.getValue("fund_manager")}</div>,
  },
  {
    accessorKey: "initial_minimum_investment",
    header: () => <TableColumnHeader name="Initial Minimum Investment" />,
    cell: ({ row }) => <div>{row.getValue("initial_minimum_investment")}</div>,
  },
  {
    accessorKey: "average_daily_yield",
    header: () => <TableColumnHeader name="Average Daily Yield" />,
    cell: ({ row }) => <div>{row.getValue("average_daily_yield")}</div>,
  },
];
