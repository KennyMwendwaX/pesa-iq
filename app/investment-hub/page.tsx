"use client";

import { AiFillMoneyCollect } from "react-icons/ai";
import {
  HiCurrencyDollar,
  HiOutlineChevronRight,
  HiPresentationChartLine,
} from "react-icons/hi";
import {
  FaBitcoin,
  FaHandshake,
  FaMoneyBillTrendUp,
  FaMoneyCheckDollar,
} from "react-icons/fa6";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function InvestmentHub() {
  const { data: session, status } = useSession();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Discover Your Investment Hub
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Explore a world of investment opportunities, your gateway to
              financial success. Empower your financial journey with our
              valuable resources and insights.
            </p>
          </div>
          <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <HiPresentationChartLine className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">NSE</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Unlock investment potential on the NSE. Invest in renowned
                Kenyan firms, tap into market dynamics, and potentially earn
                from dividends and market appreciation.
              </p>
              <Link
                href="/investment-hub/nse"
                className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-800">
                <span>Learn more</span>
                <HiOutlineChevronRight />
              </Link>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <FaBitcoin className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Crypto</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Embark on a digital asset journey with cryptocurrencies. Invest
                in decentralized, borderless virtual currencies with potential
                for high growth and financial innovation.
              </p>
              <Link
                href="/investment-hub/crypto"
                className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-800">
                <span>Learn more</span>
                <HiOutlineChevronRight />
              </Link>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <HiCurrencyDollar className="w-6 h-6 text-blue-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Stock Market
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enter the world of stocks, owning shares in global companies.
                Benefit from potential capital growth and dividends in the
                dynamic stock market.
              </p>
              <Link
                href="/investment-hub/stocks"
                className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-800">
                <span>Learn more</span>
                <HiOutlineChevronRight />
              </Link>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <FaHandshake className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Saccos</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Join Saccos for community-based savings and credit services.
                Collaborate with members for financial growth, security, and
                community support.
              </p>
              <Link
                href="/investment-hub/saccos"
                className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-800">
                <span>Learn more</span>
                <HiOutlineChevronRight />
              </Link>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <FaMoneyBillTrendUp className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Money Market Fund
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Explore the money market for low-risk investments. Safeguard
                your funds with short-term securities, a stable choice for
                preserving and growing capital.
              </p>
              <Link
                href="/investment-hub/money-market-fund"
                className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-800">
                <span>Learn more</span>
                <HiOutlineChevronRight />
              </Link>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <FaMoneyCheckDollar className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Bonds</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Invest in bonds for a steady income stream. Lend capital to
                governments or corporations and receive periodic interest
                payments, ensuring financial stability.
              </p>
              <Link
                href="/investment-hub/bonds"
                className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-800">
                <span>Learn more</span>
                <HiOutlineChevronRight />
              </Link>
            </div>
            {/* <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <AiFillMoneyCollect className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Forex</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Engage in international currency exchange through Forex.
                Speculate on currency pair fluctuations and seize profit
                opportunities in this 24-hour marketplace.
              </p>
              <div className="flex items-center space-x-1 text-blue-500 cursor-pointer hover:text-blue-800">
                <span>Learn more</span>
                <HiOutlineChevronRight />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
