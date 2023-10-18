import Navbar2 from "@/components/Navbar2";
import { Button } from "@/components/ui/button";
import { HiPlus } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";

export default function Income() {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div>Income</div>
        <Button className="flex items-center space-x-2 rounded-3xl">
          <AiOutlinePlus className="w-4 h-4 text-white" />
          <span>Add Income</span>
        </Button>
      </div>
    </>
  );
}
