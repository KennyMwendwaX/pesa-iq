import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const options = {
    method: "GET",
    url: "https://twelve-data1.p.rapidapi.com/stocks",
    params: {
      exchange: "NASDAQ",
      format: "json",
    },
    headers: {
      "X-RapidAPI-Key": "7bfd5fe57bmsh7905ed23d600c05p12dc8ajsne2b2ea67ac13",
      "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (!response)
      return NextResponse.json(
        { message: "Failed to fetch NSE stocks" },
        { status: 400 }
      );
    const stocks = response.data;
    return NextResponse.json({ stocks }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, try again later" },
      { status: 500 }
    );
  }
}
