import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  request: Request,
  { params }: { params: { query: string } }
) {
  const query = params.query;

  const options = {
    method: "GET",
    url: "https://news-api14.p.rapidapi.com/search",
    params: {
      q: query,
      language: "en",
      pageSize: "10",
    },
    headers: {
      "X-RapidAPI-Key": "7bfd5fe57bmsh7905ed23d600c05p12dc8ajsne2b2ea67ac13",
      "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
    },
  };

  try {
    const res = await axios.request(options);
    if (!res)
      return NextResponse.json(
        { message: "Failed to fetch articles" },
        { status: 400 }
      );
    const response = res.data;
    const articlesData = response.articles;
    return NextResponse.json({ articlesData }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server error, try again later" },
      { status: 500 }
    );
  }
}
