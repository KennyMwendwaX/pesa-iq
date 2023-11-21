import { AiFillMoneyCollect } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

export default function EducationHub() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Crypto Category Card */}
          <div className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaBitcoin size={32} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Crypto</h3>
            </div>
            <p className="text-sm">
              Cover news related to cryptocurrencies like Bitcoin, Ethereum, and
              other altcoins.
            </p>
          </div>

          {/* Stocks Category Card */}
          <div className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <HiCurrencyDollar size={32} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Stocks</h3>
            </div>
            <p className="text-sm">
              Focus on news about individual stocks, stock markets, and
              financial indices.
            </p>
          </div>

          {/* Forex Category Card */}
          <div className="bg-blue-200 text-blue-700 p-6 rounded-lg shadow-sm transition duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <AiFillMoneyCollect size={32} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Forex</h3>
            </div>
            <p className="text-sm">
              Provide updates on currency markets, exchange rates, and global
              economic trends.
            </p>
          </div>

          {/* Add more category cards as needed */}
        </div>
      </div>
    </>
  );
}
