import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const query = body.query.toLowerCase().trim().replaceAll(" ", "-");

    const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${query}`);

    const data = await response.json();

    const existingGames = await prisma.game.findMany({
      select: {
        slug: true,
      },
    });

    const existingSlugs = new Set(existingGames.map((game) => game.slug));

    const filteredGames = data.results.filter(
      (game: any) =>
        !existingSlugs.has(game.slug) &&
        game.platforms?.some((platform: any) => {
          const name = platform.platform.name.toLowerCase();

          return (
            name.includes("pc") || name.includes("playstation") || name.includes("xbox") || name.includes("nintendo")
          );
        }),
    );

    const mappedGames = filteredGames.map((item: { id: number; name: string; background_image: string }) => ({
      id: item.id,
      name: item.name,
      backgroundImage: item.background_image,
    }));

    return NextResponse.json(mappedGames);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
