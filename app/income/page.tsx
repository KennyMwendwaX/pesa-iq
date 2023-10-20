import Navbar2 from "@/components/Navbar2";
import AddIncomeModal from "@/components/AddIncomeModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Income() {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Income</div>
        <AddIncomeModal />
        <div className="flex pt-3">
          <Table className="w-[800px]">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Income</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">comment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
