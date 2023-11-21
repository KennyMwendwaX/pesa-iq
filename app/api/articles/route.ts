import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const options = {
    method: "GET",
    url: "https://news-api14.p.rapidapi.com/search",
    params: {
      q: "money market fund in kenya",
      language: "en",
      pageSize: "20",
    },
    headers: {
      "X-RapidAPI-Key": "7bfd5fe57bmsh7905ed23d600c05p12dc8ajsne2b2ea67ac13",
      "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (!response)
      return NextResponse.json(
        { message: "Failed to fetch articles" },
        { status: 400 }
      );
    const articles = response.data;
    return NextResponse.json({ articles }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, try again later" },
      { status: 500 }
    );
  }
}
