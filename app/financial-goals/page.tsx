import AddFinancialGoalModal from "@/components/AddFinancialGoalModal";

export default function FinancialGoals() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Financial Goals</div>
        <AddFinancialGoalModal />
      </div>
    </>
  );
}
