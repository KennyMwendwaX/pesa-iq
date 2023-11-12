import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { NSEStockData } from "@/types/NSEStockData";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export const NSETableColumns: ColumnDef<NSEStockData>[] = [
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
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "volume",
    header: () => <TableColumnHeader name="Volume" />,
    cell: ({ row }) => {
      const volume = parseInt(row.getValue("volume"));

      return (
        <>{volume > 0 ? <div>{row.getValue("volume")}</div> : <div>0</div>}</>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <TableColumnHeader name="Price" />,
    cell: ({ row }) => <div>{row.getValue("price")}</div>,
  },
  {
    accessorKey: "change",
    header: () => <TableColumnHeader name="Change" />,
    cell: ({ row }) => {
      const changeValue = parseFloat(row.getValue("change"));

      return (
        <>
          {changeValue < 0.0 ? (
            <div className="flex items-center">
              <FiArrowDownRight className="w-5 h-5 mr-2 text-red-600" />
              <div className="text-red-600">{row.getValue("change")}</div>
            </div>
          ) : changeValue > 0.0 ? (
            <div className="flex items-center">
              <FiArrowUpRight className="w-5 h-5 mr-2 text-green-600" />
              <div className="text-green-600">{row.getValue("change")}</div>
            </div>
          ) : changeValue == 0.0 ? (
            <div className="flex items-center">
              <FiArrowRight className="w-5 h-5 mr-2 text-gray-600" />
              <div className="text-gray-600">0.00</div>
            </div>
          ) : (
            <div className="flex items-center">
              <FiArrowRight className="w-5 h-5 mr-2 text-gray-600" />
              <div className="text-gray-600">0.00</div>
            </div>
          )}
        </>
      );
    },
  },
];
