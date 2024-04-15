import type { NextPage } from "next";
import { GitHub } from "../../components/utils/github";
import env from "../../components/utils/envs";
import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import { PortFolioList } from "@/components/Portfolio/PortfolioList";

const getData = async () => {
  const client = new GitHub(env.GITHUB_USERNAME, env.GITHUB_TOKEN);

  const githubPinnedProjects = await client.getPinnedProjects();

  return { githubPinnedProjects };
};

const Portfolio: NextPage = async () => {
  const { githubPinnedProjects } = await getData();

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
            <PortFolioList githubPinnedProjects={githubPinnedProjects}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
