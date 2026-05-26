"use client";
import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";

import { useFilters } from "@/hooks/useFilters";
import { useFetch } from "@/hooks/useFetch";
import { MessagesContext } from "@/components/_providers/MessagesContext";

import { UserProfileType } from "@/types";

import UserHeader from "@/components/user/UserHeader";
import UserControls from "@/components/user/UserControls";
import UserReviews from "@/components/user/UserReviews";
import UserOverview from "@/components/user/UserOverview";
import UserLists from "@/components/user/lists/UserLists";
import UserSettings from "@/components/user/UserSettings";
import FetchSection from "@/components/shared/states/FetchSection";

const UserDetails = () => {
  const { searchParams } = useFilters();
  const params = useParams();
  const { data, isLoading, error } = useFetch<UserProfileType>(`/api/${params.username}`);
  const { setNewMessage } = useContext(MessagesContext);

  const section = searchParams.get("section") ?? "overview";

  useEffect(() => {
    if (error) {
      setNewMessage(error.status, error.message);
    }
  }, [error]);

  return (
    <>
      <FetchSection error={error} isLoading={isLoading}>
        {data && (
          <>
            <UserHeader data={data} />
            <UserControls isCurrentUser={data.isCurrentUser} />
            {section === "overview" && <UserOverview favGame={data.favoriteGame} averageRating={data.averageRating} />}
            {section === "reviews" && <UserReviews username={data.usernameLower} />}
            {section === "lists" && <UserLists />}
            {data.isCurrentUser && section === "settings" && <UserSettings />}
          </>
        )}
      </FetchSection>
    </>
  );
};

export default UserDetails;
