"use client";
import { useFilters } from "@/hooks/useFilters";

import UserHeader from "@/components/user/UserHeader";
import UserControls from "@/components/user/UserControls";
import UserReviews from "@/components/user/UserReviews";
import UserOverview from "@/components/user/UserOverview";
import UserLists from "@/components/user/UserLists";
import UserSettings from "@/components/user/UserSettings";

const UserDetails = () => {
  const { searchParams } = useFilters();

  const section = searchParams.get("section") ?? "overview";

  return (
    <>
      <UserHeader />
      <UserControls />
      {section === "overview" && <UserOverview />}
      {section === "reviews" && <UserReviews />}
      {section === "lists" && <UserLists />}
      {section === "settings" && <UserSettings />}
    </>
  );
};

export default UserDetails;
