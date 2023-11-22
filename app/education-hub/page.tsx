import Link from "next/link";
import { AiFillMoneyCollect } from "react-icons/ai";
import {
  FaBitcoin,
  FaCoins,
  FaHandshakeSimple,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi";
import { TbHomeDollar, TbMoneybag } from "react-icons/tb";

export default function EducationHub() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Education Hub</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {/* Crypto Category Card */}
          <Link
            href="/education-hub/crypto"
            className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaBitcoin size={32} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Crypto</h3>
            </div>
            <p className="text-sm">
              Cover news related to cryptocurrencies like Bitcoin, Ethereum, and
              other altcoins.
            </p>
          </Link>

          {/* Stocks Category Card */}
          <Link
            href="/education-hub/nse"
            className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <HiCurrencyDollar size={32} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">NSE Stocks</h3>
            </div>
            <p className="text-sm">
              Focus on news about individual stocks, stock markets, and
              financial indices.
            </p>
          </Link>

          {/* Forex Category Card */}
          <Link
            href="/education-hub/forex"
            className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <AiFillMoneyCollect size={32} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Forex</h3>
            </div>
            <p className="text-sm">
              Provide updates on currency markets, exchange rates, and global
              economic trends.
            </p>
          </Link>

          {/* Savings Category Card */}
          <Link
            href="/education-hub/savings"
            className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <TbMoneybag size={30} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Savings</h3>
            </div>
            <p className="text-sm">
              Articles about saving strategies, high-yield savings accounts, and
              tips for building a savings plan.
            </p>
          </Link>

          {/* Loans Category Card */}
          <Link
            href="/education-hub/loans"
            className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaCoins size={28} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Loans</h3>
            </div>
            <p className="text-sm">
              Articles about saving strategies, high-yield savings accounts, and
              tips for building a savings plan.
            </p>
          </Link>

          {/* SACCOs Category Card */}
          <Link
            href="/education-hub/saccos"
            className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaHandshakeSimple size={30} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">SACCOs</h3>
            </div>
            <p className="text-sm">
              News and articles related to cooperative financial institutions,
              their services, and member benefits.
            </p>
          </Link>

          {/* Money Market Fund Category Card */}
          <div className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaMoneyBillTrendUp size={28} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Money Market Fund</h3>
            </div>
            <p className="text-sm">
              News and articles about money market trends, mutual funds, and
              investment opportunities.
            </p>
          </div>

          {/* Insurance Category Card */}
          <div className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <GoShieldCheck size={30} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Insurance</h3>
            </div>
            <p className="text-sm">
              Articles on insurance policies, industry trends, and tips for
              choosing the right insurance coverage.
            </p>
          </div>

          {/* Mortgages Category Card */}
          <div className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <TbHomeDollar size={30} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Mortgages</h3>
            </div>
            <p className="text-sm">
              Articles on on mortgage rates, real estate market trends, and home
              buying tips.
            </p>
          </div>

          {/* Add more category cards as needed */}
        </div>
      </div>
    </>
  );
}
