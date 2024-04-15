"use client";
import { useSearchParams } from "next/navigation";
import type { PinnedProject } from "./../utils/github";
import PortfolioCard from "./PortfolioCard";

export const TAG_FILTER = "tagFilter";

export const PortFolioList = ({
  githubPinnedProjects,
}: {
  githubPinnedProjects: PinnedProject[];
}) => {
  const params = useSearchParams();
  const tag = params.get(TAG_FILTER);

  return (
    <>
      {githubPinnedProjects
        .filter(
          (item) =>
            !tag || tag === item.primaryLanguage.name.split(" ").join("")
        )
        .map((item) => (
          <PortfolioCard
            key={item.nameWithOwner}
            title={item.nameWithOwner}
            description={item.description}
            stars={item.stargazerCount}
            url={item.url}
            primaryLanguage={item.primaryLanguage.name.split(" ").join("")}
          />
        ))}
    </>
  );
};
