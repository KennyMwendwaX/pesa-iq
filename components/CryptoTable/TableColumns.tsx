import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { Coin } from "@/types/Crypto";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import formatCurrency from "@/lib/formatCurrency";

export const CryptoTableColumns: ColumnDef<Coin>[] = [
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
    accessorKey: "name",
    header: () => <TableColumnHeader name="Name" />,
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "iconUrl",
    header: () => <TableColumnHeader name="Icon" />,
    cell: ({ row }) => {
      const iconSVG = row.getValue("iconUrl") as string;
      console.log(iconSVG);
      return (
        <div className="">
          <Image src={iconSVG} width={24} height={24} alt="icon-svg" />
        </div>
      );
    },
  },
  {
    accessorKey: "symbol",
    header: () => <TableColumnHeader name="Symbol" />,
    cell: ({ row }) => <div className="">{row.getValue("symbol")}</div>,
  },
  {
    accessorKey: "price",
    header: () => <TableColumnHeader name="Price" />,
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      return <div className="">{formatCurrency(price)}</div>;
    },
  },
  {
    accessorKey: "marketCap",
    header: () => <TableColumnHeader name="Market Cap" />,
    cell: ({ row }) => <div className="">{row.getValue("price")}</div>,
  },
  {
    accessorKey: "24hVolume",
    header: () => <TableColumnHeader name="24h Volume" />,
    cell: ({ row }) => <div className="">{row.getValue("24hVolume")}</div>,
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
              <div className="text-green-600">+{row.getValue("change")}</div>
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
