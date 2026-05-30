import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/helpers";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json(
        {
          message: "You must be logged in",
        },
        {
          status: 401,
        },
      );
    }

    const formData = await req.formData();

    const description = formData.get("description")?.toString().trim() || "";
    const image = formData.get("profile-picture") as File | null;
    const backgroundImage = formData.get("background-picture") as File | null;

    const updateData: {
      description?: string;
      image?: string;
      backgroundImage?: string;
    } = {
      description,
    };

    if (image && image.size > 0) {
      const imageUrl = await uploadToCloudinary(image);
      updateData.image = imageUrl;
    }

    if (backgroundImage && backgroundImage.size > 0) {
      const backgroundUrl = await uploadToCloudinary(backgroundImage);
      updateData.backgroundImage = backgroundUrl;
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: updateData,
    });

    return NextResponse.json(
      {
        message: "Profile updated successfully",
        user: {
          description: updatedUser.description,
          image: updatedUser.image,
          backgroundImage: updatedUser.backgroundImage,
        },
      },
      {
        status: 200,
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
