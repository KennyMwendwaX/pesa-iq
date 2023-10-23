import { MdHealthAndSafety } from "react-icons/md";
import { FaMoneyBillTrendUp, FaUmbrellaBeach } from "react-icons/fa6";
import { BsCarFrontFill, BsFillTagFill, BsShieldCheck } from "react-icons/bs";
import {
  AiOutlineBulb,
  AiOutlineDollarCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { BiSolidBookBookmark, BiSolidMoviePlay } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";

export const expenseCategories = [
  {
    label: "Housing",
    value: "housing",
    icon: IoHome,
  },
  {
    label: "Transport",
    value: "transport",
    icon: BsCarFrontFill,
  },
  {
    label: "Healthcare",
    value: "healthcare",
    icon: MdHealthAndSafety,
  },
  {
    label: "Education",
    value: "education",
    icon: BiSolidBookBookmark,
  },
  {
    label: "Loan",
    value: "loan",
    icon: AiOutlineDollarCircle,
  },
  {
    label: "Food & Groceries",
    value: "food",
    icon: GiKnifeFork,
  },
  {
    label: "Insurance",
    value: "insurance",
    icon: BsShieldCheck,
  },
  {
    label: "Utilities",
    value: "utilities",
    icon: AiOutlineBulb,
  },
  {
    label: "Clothing",
    value: "clothing",
    icon: BsFillTagFill,
  },
  {
    label: "Entertainment",
    value: "entertainment",
    icon: BiSolidMoviePlay,
  },
  {
    label: "Savings",
    value: "savings",
    icon: CiCoinInsert,
  },
  {
    label: "Investment",
    value: "investment",
    icon: FaMoneyBillTrendUp,
  },
  {
    label: "Vacation",
    value: "vacation",
    icon: FaUmbrellaBeach,
  },
  {
    label: "Other",
    value: "other",
    icon: AiOutlineQuestionCircle,
  },
];
