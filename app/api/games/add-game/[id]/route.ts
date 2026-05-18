import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

import defaultImg from "@/public/assets/default.png";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;

    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`);
    const screenshotsResponse = await fetch(
      `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.RAWG_API_KEY}`,
    );

    const data = await response.json();
    const screenshotsData = await screenshotsResponse.json();

    const genres = data.genres?.map((genre: any) => genre.name) || [];
    const publishers = data.publishers?.map((pub: any) => pub.name) || [];
    const developers = data.developers?.map((dev: any) => dev.name) || [];
    const screenshots = screenshotsData.results?.map((screen: any) => screen.image) || [];

    const gameModes = [
      ...new Set(
        data.tags.map((item: any) => {
          const name = item.name.toLowerCase();

          if (name.includes("singleplayer")) return "Singleplayer";
          if (name.includes("multiplayer")) return "Multiplayer";
          if (name.includes("co-op")) return "Co-op";

          return null;
        }),
      ),
    ].filter((mode): mode is string => mode !== null);

    const platforms = [
      ...new Set(
        data.platforms.map((item: any) => {
          const name = item.platform.name.toLowerCase();

          if (name.includes("playstation")) return "PlayStation";
          if (name.includes("xbox")) return "Xbox";
          if (name.includes("nintendo")) return "Nintendo";
          if (name.includes("pc")) return "PC";

          return null;
        }),
      ),
    ].filter((platform): platform is string => platform !== null);

    const game = await prisma.game.create({
      data: {
        title: data.name,
        slug: data.slug,
        description: data.description_raw,
        image: data.background_image ? data.background_image : defaultImg.src,
        cover: data.background_image_additional ? data.background_image_additional : defaultImg.src,
        releaseDate: data.released ? new Date(data.released) : new Date(),
        genres: genres,
        platforms: platforms,
        screenshots: screenshots,
        developer: developers,
        publisher: publishers,
        esrb: data.esrb_rating?.name ?? "",
        modes: gameModes.length === 0 ? [] : gameModes,
        addedById: "user1", // potem auth
      },
    });

    return NextResponse.json(game);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
