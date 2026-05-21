import { authOptions } from "@/lib/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  redirect(`/users/${session.user.username}`);
};

export default Page;
