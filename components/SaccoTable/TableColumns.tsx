import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { Sacco } from "@/types/Sacco";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export const SaccoTableColumns: ColumnDef<Sacco>[] = [
  {
    accessorKey: "rank",
    header: () => <TableColumnHeader name="Rank" />,
    cell: ({ row }) => <div className="w-[30px]">{row.getValue("rank")}</div>,
  },
  {
    accessorKey: "sacco",
    header: () => <TableColumnHeader name="SACCO" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("sacco")}</div>,
  },
  {
    accessorKey: "registration_fee",
    header: () => <TableColumnHeader name="Registration Fee" />,
    cell: ({ row }) => (
      <div className="w-[115px]">{row.getValue("registration_fee")}</div>
    ),
  },
  {
    accessorKey: "minimum_monthly_contribution",
    header: () => <TableColumnHeader name="Minimum Monthly Contribution" />,
    cell: ({ row }) => (
      <div className="w-[205px]">
        {row.getValue("minimum_monthly_contribution")}
      </div>
    ),
  },
  {
    accessorKey: "share_on_capital",
    header: () => <TableColumnHeader name="Share on Capital" />,
    cell: ({ row }) => (
      <div className="w-[115px]">{row.getValue("share_on_capital")}</div>
    ),
  },
  {
    accessorKey: "maximum_loan_multiple",
    header: () => <TableColumnHeader name="Maximum Loan Multiple" />,
    cell: ({ row }) => (
      <div className="w-[165px]">{row.getValue("maximum_loan_multiple")}</div>
    ),
  },
  {
    accessorKey: "dividend_on_share_capital",
    header: () => <TableColumnHeader name="Dividends on Share Capital" />,
    cell: ({ row }) => (
      <div className="w-[180px]">
        {row.getValue("dividend_on_share_capital")}
      </div>
    ),
  },
  {
    accessorKey: "interest_in_member_deposit",
    header: () => <TableColumnHeader name="Interest" />,
    cell: ({ row }) => <div>{row.getValue("interest_in_member_deposit")}</div>,
  },
];
