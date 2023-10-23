import AddExpenseModal from "@/components/AddExpenseModal";
import Navbar2 from "@/components/Navbar2";

export default function page() {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Expenses</div>
        <AddExpenseModal />
      </div>
    </>
  );
}
