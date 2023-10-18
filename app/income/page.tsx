import Navbar2 from "@/components/Navbar2";
import AddIncomeModal from "@/components/AddIncomeModal";

export default function Income() {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Income</div>
        <AddIncomeModal />
      </div>
    </>
  );
}
