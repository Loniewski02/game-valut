"use client";
import { useFilters } from "@/hooks/useFilters";

import { useParams } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";

import { UserProfileType } from "@/types";

import UserHeader from "@/components/user/UserHeader";
import UserControls from "@/components/user/UserControls";
import UserReviews from "@/components/user/UserReviews";
import UserOverview from "@/components/user/UserOverview";
import UserLists from "@/components/user/UserLists";
import UserSettings from "@/components/user/UserSettings";
import FetchSection from "@/components/shared/states/FetchSection";

const UserDetails = () => {
  const { searchParams } = useFilters();
  const params = useParams();
  const { data, isLoading, error } = useFetch<UserProfileType>(`/api/users/${params.username}`);
  
  const section = searchParams.get("section") ?? "overview";

  return (
    <>
      <FetchSection error={error} isLoading={isLoading}>
        {data && (
          <>
            <UserHeader data={data} />
            <UserControls />
            {section === "overview" && <UserOverview />}
            {section === "reviews" && <UserReviews reviews={data.reviews} />}
            {section === "lists" && <UserLists />}
            {section === "settings" && <UserSettings />}
          </>
        )}
      </FetchSection>
    </>
  );
};

export default UserDetails;
