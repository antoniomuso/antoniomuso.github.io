import type { NextPage } from "next";
import { GitHub } from "../utils/github";
import env from "../utils/envs";
import PortfolioCard from "@/components/Portfolio/PortfolioCard";

export const getData = async () => {
  const client = new GitHub(env.GITHUB_USERNAME, env.GITHUB_TOKEN);

  const githubPinnedProjects = await client.getPinnedProjects();

  return { githubPinnedProjects };
};

const Portfolio: NextPage = async () => {
  const { githubPinnedProjects } = await getData();

  console.log(githubPinnedProjects);
  return (
    <div>
      <section className="blog section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            {githubPinnedProjects.map((item) => (
              <PortfolioCard
                key={item.nameWithOwner}
                title={item.nameWithOwner}
                description={item.description}
                stars={item.stargazerCount}
              />
            ))}

            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
