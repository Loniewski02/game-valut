"use client";
import { useState } from "react";

import UserHeader from "@/components/user/UserHeader";
import UserControls from "@/components/user/UserControls";
import UserReviews from "@/components/user/UserReviews";
import UserOverview from "@/components/user/UserOverview";
import UserLists from "@/components/user/UserLists";
import UserSettings from "@/components/user/UserSettings";

const page = () => {
  const [section, setSection] = useState("overview");

  const sectionHandler = (text: string) => {
    setSection(text);
  };

  return (
    <>
      <UserHeader />
      <UserControls onSection={sectionHandler} section={section} />
      {section === "overview" && <UserOverview />}
      {section === "reviews" && <UserReviews />}
      {section === "lists" && <UserLists />}
      {section === "settings" && <UserSettings />}
    </>
  );
};

export default page;
