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
