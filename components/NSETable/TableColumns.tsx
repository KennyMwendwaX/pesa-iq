import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { NSEStockData } from "@/types/NSEStockData";

export const TableColumns: ColumnDef<NSEStockData>[] = [
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
    accessorKey: "ticker",
    header: () => <TableColumnHeader name="Ticker" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("ticker")}</div>,
  },
  {
    accessorKey: "name",
    header: () => <TableColumnHeader name="Name" />,
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "volume",
    header: () => <TableColumnHeader name="Volume" />,
    cell: ({ row }) => <div className="">{row.getValue("volume")}</div>,
  },
  {
    accessorKey: "price",
    header: () => <TableColumnHeader name="Price" />,
    cell: ({ row }) => <div className="">{row.getValue("price")}</div>,
  },
  {
    accessorKey: "change",
    header: () => <TableColumnHeader name="Change" />,
    cell: ({ row }) => <div className="">{row.getValue("change")}</div>,
  },
];
