"use client";

import Image from "next/image";
import KenyaYieldCurve from "@/app/kenya-yield-curve-3-nov.svg";

export default function Bonds() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="pb-4">
          <div className="text-2xl font-bold tracking-tight">
            Treasury Bonds
          </div>
          <p className="text-muted-foreground mr-60">
            These are long-term debt obligations. They have maturity dates of
            2-30 years. The minimum investment is Ksh 50,000 for regular bonds
            and Ksh 100,000 for Infrastructure bonds.Most Treasury Bonds fetch
            interest rates between 10-13% depending on maturity dates and the
            market conditions. This is significantly higher compared to bank
            savings and fixed deposit accounts. This is also higher than what
            Money Market Funds offer, as MMFs have interest rates of 7-10%. This
            makes treasury bonds attractive to investors as they fetch higher
            returns than other asset classes.
          </p>
        </div>
        <div>
          <div className="text-xl font-bold tracking-tight">
            Kenya Yield Curve
          </div>
          <Image
            src={KenyaYieldCurve}
            width={600}
            height={600}
            alt="Kenya yield curve"
          />
          <p className="text-muted-foreground mt-4 mr-60">
            Normally, longer-duration interest rates are higher than
            short-duration. So, the yield curve normally slopes upward as
            duration increases. For this reason, the spread (i.e. the yield
            difference) between a longer and a shorter bond should be positive.
            If not, the yield curve can be flat or inverted. The curve convexity
            is measured considering some key bond durations (usually 2 years and
            10 years, but also other maturities).
          </p>
        </div>
      </div>
    </>
  );
}
