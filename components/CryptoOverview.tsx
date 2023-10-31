import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Stats } from "@/types/Crypto";
import millify from "millify";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { BsArrowLeftRight, BsCoin } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { LuArrowRightLeft } from "react-icons/lu";

interface Props {
  stats?: Stats;
}

export default function CryptoOverview({ stats }: Props) {
  const totalMarketCap = parseInt(stats?.totalMarketCap as string);
  const total24hVolume = parseInt(stats?.total24hVolume as string);

  return (
    <>
      <div className="text-2xl font-bold tracking-tight pb-2">
        Cryptocurrencies Overview
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Cryptocurrencies
            </CardTitle>
            <CheckCircledIcon className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Coins</CardTitle>
            <BsCoin className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalCoins}</div>
            <p className="text-xs text-muted-foreground">Coins</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Markets</CardTitle>
            <BiSolidDoughnutChart className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalMarkets}</div>
            <p className="text-xs text-muted-foreground">Markets</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Market Cap
            </CardTitle>
            <FiDollarSign className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{millify(totalMarketCap)}</div>
            <p className="text-xs text-muted-foreground">USD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Exchanges
            </CardTitle>
            <LuArrowRightLeft className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalExchanges}</div>
            <p className="text-xs text-muted-foreground">Exchanges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total 24h Volume
            </CardTitle>
            <IoIosTimer className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{millify(total24hVolume)}</div>
            <p className="text-xs text-muted-foreground">USD</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
