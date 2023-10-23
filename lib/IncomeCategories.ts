import { MdWork } from "react-icons/md";
import { FaMoneyBillTrendUp, FaMoneyCheckDollar } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { MdWorkHistory } from "react-icons/md";
import { BsCurrencyBitcoin, BsGraphUpArrow } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const incomeCategories = [
  {
    label: "Salary",
    value: "salary",
    icon: MdWork,
  },
  {
    label: "Investment",
    value: "investment",
    icon: FaMoneyBillTrendUp,
  },
  {
    label: "Side Business",
    value: "side-business",
    icon: GrMoney,
  },
  {
    label: "Freelance",
    value: "freelance",
    icon: MdWorkHistory,
  },
  {
    label: "Stocks",
    value: "stocks",
    icon: BsGraphUpArrow,
  },
  {
    label: "Cryptocurrency",
    value: "crypto",
    icon: BsCurrencyBitcoin,
  },
  {
    label: "Bonds",
    value: "bonds",
    icon: RiBankLine,
  },
  {
    label: "Pension",
    value: "pension",
    icon: FaMoneyCheckDollar,
  },
  {
    label: "Other",
    value: "other",
    icon: AiOutlineQuestionCircle,
  },
];
