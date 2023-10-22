import Navbar2 from "@/components/Navbar2";
import AddIncomeModal from "@/components/AddIncomeModal";
import IncomeCard from "@/components/IncomeCard";

export default function Income() {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Income</div>
        <AddIncomeModal />
        <div className="flex pt-3">
          <div className="w-[800px]">
            <IncomeCard />
          </div>
        </div>
      </div>
    </>
  );
}
