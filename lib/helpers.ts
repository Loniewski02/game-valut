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
      username: session.user.username,
    },
  });

  if (!user || user.username === user.id) {
    return null;
  }

  return user;
};
