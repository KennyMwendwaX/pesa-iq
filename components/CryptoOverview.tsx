import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Stats } from "@/types/CryptoCoins";
import millify from "millify";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface Props {
  stats?: Stats;
}

export default function CryptoOverview({ stats }: Props) {
  const totalMarketCap = parseInt(stats?.totalMarketCap as string);
  const total24hVolume = parseInt(stats?.total24hVolume as string);

  return (
    <>
      <div className="text-2xl font-bold tracking-tight pb-2">
        Crypto currencies Overview
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Cryptocurrencies
            </CardTitle>
            <CheckCircledIcon className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.total}</div>
            <p className="text-xs text-muted-foreground">10% of all tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Coins</CardTitle>
            <CheckCircledIcon className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalCoins}</div>
            <p className="text-xs text-muted-foreground">10% of all tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Markets</CardTitle>
            <CheckCircledIcon className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalMarkets}</div>
            <p className="text-xs text-muted-foreground">10% of all tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Market Cap
            </CardTitle>
            <CheckCircledIcon className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{millify(totalMarketCap)}</div>
            <p className="text-xs text-muted-foreground">10% of all tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Exchanges
            </CardTitle>
            <CheckCircledIcon className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalExchanges}</div>
            <p className="text-xs text-muted-foreground">10% of all tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total 24h Volume
            </CardTitle>
            <CheckCircledIcon className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{millify(total24hVolume)}</div>
            <p className="text-xs text-muted-foreground">10% of all tasks</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
