import { NextResponse } from "next/server";

const API_KEY = process.env.RAWG_API_KEY;

const normalizePlatform = (platform: string) => {
  if (platform.includes("PlayStation")) {
    return "PlayStation";
  }

  if (platform.includes("Xbox")) {
    return "Xbox";
  }

  if (platform.includes("Nintendo")) {
    return "Nintendo";
  }

  if (platform === "PC") {
    return "PC";
  }

  return null;
};

export async function GET() {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const data = await response.json();

    const mappedGames = data.results.map((game: any) => ({
      id: game.id,
      slug: game.slug,
      title: game.name,
      rating: game.rating,
      image: game.background_image,
      genres: game.genres.map((genre: any) => genre.name),
      platforms: Array.from(
        new Set(
          game.parent_platforms.map((platform: any) => normalizePlatform(platform.platform.name)).filter(Boolean),
        ),
      ),
    }));

    return NextResponse.json(mappedGames);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
