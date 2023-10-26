import AddExpenseModal from "@/components/AddExpenseModal";
import ExpenseCard from "@/components/ExpenseCard";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Expenses</div>
        <AddExpenseModal />
        <div className="flex pt-3">
          <div className="w-[800px]">
            <ExpenseCard />
          </div>
        </div>
      </div>
    </>
  );
}
