import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/next-auth";

import defaultImg from "@/public/assets/default.png";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        id: true,
        username: true,
      },
    });

    if (!user || user.username === user.id) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    const rawgId = params.id;

    const [response, screenshotsResponse] = await Promise.all([
      fetch(`https://api.rawg.io/api/games/${rawgId}?key=${process.env.RAWG_API_KEY}`),
      fetch(`https://api.rawg.io/api/games/${rawgId}/screenshots?key=${process.env.RAWG_API_KEY}`),
    ]);

    const data = await response.json();

    const screenshotsData = await screenshotsResponse.json();

    const existingGame = await prisma.game.findUnique({
      where: {
        slug: data.slug,
      },
    });

    if (existingGame) {
      return NextResponse.json(
        {
          message: "Game already exists",
          game: existingGame,
        },
        {
          status: 409,
        },
      );
    }

    const genres = data.genres?.map((genre: any) => genre.name) ?? [];
    const publishers = data.publishers?.map((pub: any) => pub.name) ?? [];
    const developers = data.developers?.map((dev: any) => dev.name) ?? [];
    const screenshots = screenshotsData.results?.map((screen: any) => screen.image) ?? [];

    const gameModes = Array.from(
      new Set(
        data.tags?.map((item: any) => {
          const name = item.name.toLowerCase();

          if (name.includes("singleplayer")) return "Singleplayer";
          if (name.includes("multiplayer")) return "Multiplayer";
          if (name.includes("co-op")) return "Co-op";

          return null;
        }) ?? [],
      ),
    ).filter((mode): mode is string => mode !== null);

    const platforms = Array.from(
      new Set(
        data.platforms?.map((item: any) => {
          const name = item.platform.name.toLowerCase();

          if (name.includes("playstation")) return "PlayStation";
          if (name.includes("xbox")) return "Xbox";
          if (name.includes("nintendo")) return "Nintendo";
          if (name.includes("pc")) return "PC";

          return null;
        }) ?? [],
      ),
    ).filter((platform): platform is string => platform !== null);

    const game = await prisma.game.create({
      data: {
        title: data.name,
        slug: data.slug,
        description: data.description_raw ?? "",
        image: data.background_image ?? defaultImg.src,
        cover: data.background_image_additional ?? defaultImg.src,
        releaseDate: data.released ? new Date(data.released) : new Date(),
        genres,
        platforms,
        screenshots,
        developer: developers,
        publisher: publishers,
        esrb: data.esrb_rating?.name ?? "",
        modes: gameModes,
        addedById: user.id,
      },
    });

    return NextResponse.json(
      {
        message: "Game added successfully",
        game: {
          id: game.id,
          slug: game.slug,
          title: game.title,
          rating: 0,
          image: game.image,
          genres: game.genres,
          platforms: game.platforms,
        },
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
