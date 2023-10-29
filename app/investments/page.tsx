import Navbar from "@/components/Navbar";
import { AiFillMoneyCollect } from "react-icons/ai";
import { HiCurrencyDollar, HiPresentationChartLine } from "react-icons/hi";
import {
  FaBitcoin,
  FaHandshake,
  FaMoneyBillTrendUp,
  FaMoneyCheckDollar,
} from "react-icons/fa6";

export default function Investment() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Discover Your Investment Hub
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Explore a world of investment opportunities, your gateway to
              financial success. Empower your financial journey with our
              valuable resources and insights.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <HiPresentationChartLine className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">NSE</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Unlock investment potential on the NSE. Invest in renowned
                Kenyan firms, tap into market dynamics, and potentially earn
                from dividends and market appreciation.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <FaBitcoin className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Crypto</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Embark on a digital asset journey with cryptocurrencies. Invest
                in decentralized, borderless virtual currencies with potential
                for high growth and financial innovation.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <HiCurrencyDollar className="w-6 h-6 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Stock Market
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enter the world of stocks, owning shares in global companies.
                Benefit from potential capital growth and dividends in the
                dynamic stock market.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <FaHandshake className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Saccos</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Join Saccos for community-based savings and credit services.
                Collaborate with members for financial growth, security, and
                community support.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <FaMoneyBillTrendUp className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Money Market Fund
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Explore the money market for low-risk investments. Safeguard
                your funds with short-term securities, a stable choice for
                preserving and growing capital.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <FaMoneyCheckDollar className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Bonds</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <AiFillMoneyCollect className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Forex</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
