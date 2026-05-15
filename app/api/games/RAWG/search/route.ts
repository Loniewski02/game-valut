import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const query = body.query.toLowerCase().trim().replaceAll(" ", "-");

    const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${query}`);

    const data = await response.json();

    const filteredGames = data.results.filter((game: any) =>
      game.platforms?.some((platform: any) => {
        const name = platform.platform.name.toLowerCase();

        return (
          name.includes("pc") || name.includes("playstation") || name.includes("xbox") || name.includes("nintendo")
        );
      }),
    );

    return NextResponse.json(filteredGames);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
