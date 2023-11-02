import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { Stock } from "@/types/Stocks";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import formatCurrency from "@/lib/formatCurrency";

export const StocksTableColumns: ColumnDef<Stock>[] = [
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
    accessorKey: "symbol",
    header: () => <TableColumnHeader name="Symbol" />,
    cell: ({ row }) => <div className="w-[30px]">{row.getValue("symbol")}</div>,
  },
  {
    accessorKey: "name",
    header: () => <TableColumnHeader name="Name" />,
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "currency",
    header: () => <TableColumnHeader name="Currency" />,
    cell: ({ row }) => <div className="">{row.getValue("currency")}</div>,
  },
  {
    accessorKey: "exchange",
    header: () => <TableColumnHeader name="Exchange" />,
    cell: ({ row }) => <div className="">{row.getValue("exchange")}</div>,
  },
  {
    accessorKey: "mic_code",
    header: () => <TableColumnHeader name="Mic Code" />,
    cell: ({ row }) => <div className="">{row.getValue("mic_code")}</div>,
  },
  {
    accessorKey: "country",
    header: () => <TableColumnHeader name="Country" />,
    cell: ({ row }) => <div className="">{row.getValue("country")}</div>,
  },
  {
    accessorKey: "type",
    header: () => <TableColumnHeader name="Type" />,
    cell: ({ row }) => <div className="">{row.getValue("type")}</div>,
  },
];
