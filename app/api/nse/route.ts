export async function GET(request: Request) {
  const url = "https://nairobi-stock-exchange-nse.p.rapidapi.com/stocks";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7bfd5fe57bmsh7905ed23d600c05p12dc8ajsne2b2ea67ac13",
      "X-RapidAPI-Host": "nairobi-stock-exchange-nse.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return Response.json({ result });
  } catch (error) {
    console.error(error);
  }
}
