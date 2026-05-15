import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    return NextResponse.json({});
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Failed to fetch games" }, { status: 500 });
  }
}
