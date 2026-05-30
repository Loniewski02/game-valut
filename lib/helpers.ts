import { getServerSession } from "next-auth";

import { authOptions } from "./next-auth";
import { prisma } from "./prisma";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
      usernameLower: session.user.username.toLowerCase(),
    },
  });

  if (!user || user.isDeleted) {
    return null;
  }

  return user;
};
