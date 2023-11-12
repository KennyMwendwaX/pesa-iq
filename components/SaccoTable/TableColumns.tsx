import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { Sacco } from "@/types/Sacco";

export const SaccoTableColumns: ColumnDef<Sacco>[] = [
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
    cell: ({ row }) => <div className="w-[30px]">{row.getValue("rank")}</div>,
  },
  {
    accessorKey: "sacco",
    header: () => <TableColumnHeader name="SACCO" />,
    cell: ({ row }) => <div>{row.getValue("sacco")}</div>,
  },
  {
    accessorKey: "registration_fee",
    header: () => <TableColumnHeader name="Registration Fee" />,
    cell: ({ row }) => <div>{row.getValue("registration_fee")}</div>,
  },
  {
    accessorKey: "minimum_monthly_contribution",
    header: () => <TableColumnHeader name="Monthly Contribution" />,
    cell: ({ row }) => (
      <div>{row.getValue("minimum_monthly_contribution")}</div>
    ),
  },
  {
    accessorKey: "share_on_capital",
    header: () => <TableColumnHeader name="Share on Capital" />,
    cell: ({ row }) => <div>{row.getValue("share_on_capital")}</div>,
  },
  {
    accessorKey: "maximum_loan_multiple",
    header: () => <TableColumnHeader name="Loan Multiples" />,
    cell: ({ row }) => <div>{row.getValue("maximum_loan_multiple")}</div>,
  },
  {
    accessorKey: "dividend_on_share_capital",
    header: () => <TableColumnHeader name="Dividends" />,
    cell: ({ row }) => <div>{row.getValue("dividend_on_share_capital")}</div>,
  },
  {
    accessorKey: "interest_in_member_deposit",
    header: () => <TableColumnHeader name="Interest" />,
    cell: ({ row }) => <div>{row.getValue("interest_in_member_deposit")}</div>,
  },
];
