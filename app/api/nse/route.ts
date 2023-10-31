import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const options = {
    method: "GET",
    url: "https://nairobi-stock-exchange-nse.p.rapidapi.com/stocks",
    headers: {
      "X-RapidAPI-Key": "7bfd5fe57bmsh7905ed23d600c05p12dc8ajsne2b2ea67ac13",
      "X-RapidAPI-Host": "nairobi-stock-exchange-nse.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (!response)
      return NextResponse.json(
        { message: "Failed to fetch NSE stocks" },
        { status: 400 }
      );
    const NSE_Stocks = response.data;
    return NextResponse.json({ NSE_Stocks }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, try again later" },
      { status: 500 }
    );
  }
}
