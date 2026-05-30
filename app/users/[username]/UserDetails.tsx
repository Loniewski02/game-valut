"use client";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useFilters } from "@/hooks/useFilters";
import { useFetch } from "@/hooks/useFetch";
import { MessagesContext } from "@/components/_providers/MessagesContext";

import { UserProfileType } from "@/types";

import UserHeader from "@/components/user/UserHeader";
import UserControls from "@/components/user/UserControls";
import UserReviews from "@/components/user/UserReviews";
import UserOverview from "@/components/user/UserOverview";
import UserLists from "@/components/user/UserLists";
import UserSettings from "@/components/user/UserSettings";
import FetchSection from "@/components/shared/states/FetchSection";

const UserDetails = ({ username }: { username: string }) => {
  const { data: session } = useSession();
  const { searchParams, update } = useFilters();
  const { data, isLoading, error } = useFetch<UserProfileType>(`/api/users/${username}`);
  const { setNewMessage } = useContext(MessagesContext);

  const section = searchParams.get("section") ?? "overview";

  const isCurrentUser = Boolean(session && session.user.username.toLowerCase() === username);

  useEffect(() => {
    if (error) {
      setNewMessage(error.status, error.message);
    }
  }, [error]);

  useEffect(() => {
    if (section === "settings" && !isCurrentUser) {
      update("section", "overview");
    }
  }, [section]);

  return (
    <>
      <FetchSection error={error} isLoading={isLoading}>
        {data && (
          <>
            <UserHeader data={data} />
            <UserControls isCurrentUser={isCurrentUser} />
            {section === "overview" && (
              <UserOverview
                favGame={data.favoriteGame}
                averageRating={data.averageRating}
                gamesPlayed={data.listCount}
              />
            )}
            {section === "reviews" && <UserReviews username={data.usernameLower} />}
            {section === "lists" && <UserLists username={data.usernameLower} isCurrentUser={isCurrentUser} />}
            {isCurrentUser && section === "settings" && <UserSettings user={data} />}
          </>
        )}
      </FetchSection>
    </>
  );
};

export default UserDetails;
