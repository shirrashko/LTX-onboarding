import React, { useState } from "react";
import Overview from "../../components/user-profile-overview/Overview.tsx";
import Posts from "../../components/user-profile-posts/Posts.tsx";
import { User } from "../../types/user.ts";
import "./Tabs.scss";
import clsx from "clsx";

interface TabsProps {
  user: User;
}

type TabOption = "overview" | "posts";

function Tabs({ user }: TabsProps) {
  const [activeTab, setActiveTab] = useState<TabOption>("overview");

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          className={clsx("tab-button", { active: activeTab === "overview" })}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "overview" && (
          <div className="overview-content">
            <Overview user={user} />
          </div>
        )}

        {activeTab === "posts" && (
          <div className="posts-content">
            <Posts />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
