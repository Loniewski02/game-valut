import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username } = await req.json();

    const lists = await prisma.gameList.findMany({
      where: {
        user: {
          usernameLower: username.toLowerCase(),
        },
      },
      include: {
        game: {
          select: {
            id: true,
            title: true,
            slug: true,
            image: true,
          },
        },
      },
    });

    const mappedLists = {
      wantToPlay: lists.filter((item) => item.status === "WANT_TO_PLAY"),
      playing: lists.filter((item) => item.status === "PLAYING"),
      played: lists.filter((item) => item.status === "PLAYED"),
    };

    return NextResponse.json(mappedLists);
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
