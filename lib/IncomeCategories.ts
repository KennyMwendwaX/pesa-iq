import { MdHealthAndSafety, MdWork } from "react-icons/md";
import {
  FaMoneyBillTrendUp,
  FaMoneyCheckDollar,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { MdWorkHistory } from "react-icons/md";
import {
  BsCarFrontFill,
  BsCurrencyBitcoin,
  BsFillTagFill,
  BsGraphUpArrow,
  BsShieldCheck,
} from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import {
  AiOutlineBulb,
  AiOutlineDollarCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { BiSolidBookBookmark, BiSolidMoviePlay } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";

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

export const expenseCategories = [
  {
    value: "housing",
    icon: IoHome,
  },
  {
    value: "transport",
    icon: BsCarFrontFill,
  },
  {
    value: "healthcare",
    icon: MdHealthAndSafety,
  },
  {
    value: "education",
    icon: BiSolidBookBookmark,
  },
  {
    value: "loan",
    icon: AiOutlineDollarCircle,
  },
  {
    value: "food",
    icon: GiKnifeFork,
  },
  {
    value: "insurance",
    icon: BsShieldCheck,
  },
  {
    value: "utilities",
    icon: AiOutlineBulb,
  },
  {
    value: "clothing",
    icon: BsFillTagFill,
  },
  {
    value: "entertainment",
    icon: BiSolidMoviePlay,
  },
  {
    value: "savings",
    icon: CiCoinInsert,
  },
  {
    value: "investment",
    icon: FaMoneyBillTrendUp,
  },
  {
    value: "vacation",
    icon: FaUmbrellaBeach,
  },
  {
    value: "other",
    icon: AiOutlineQuestionCircle,
  },
];
