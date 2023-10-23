import { MdWork } from "react-icons/md";
import { FaMoneyBillTrendUp, FaMoneyCheckDollar } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { MdWorkHistory } from "react-icons/md";
import { BsCurrencyBitcoin, BsGraphUpArrow } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const incomeCategories = [
  {
    value: "salary",
    icon: MdWork,
  },
  {
    value: "investment",
    icon: FaMoneyBillTrendUp,
  },
  {
    value: "side-business",
    icon: GrMoney,
  },
  {
    value: "freelance",
    icon: MdWorkHistory,
  },
  {
    value: "stocks",
    icon: BsGraphUpArrow,
  },
  {
    value: "crypto",
    icon: BsCurrencyBitcoin,
  },
  {
    value: "bonds",
    icon: RiBankLine,
  },
  {
    value: "pension",
    icon: FaMoneyCheckDollar,
  },
  {
    value: "other",
    icon: AiOutlineQuestionCircle,
  },
];
