import { graphql } from "@octokit/graphql";

export type PinnedProject = {
  name: string;
  nameWithOwner: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  stargazerCount: number;
  primaryLanguage: {
    name: string;
  };
};

export class GitHub {
  private username: string;
  private client: typeof graphql;

  constructor(username: string, token: string) {
    this.username = username;
    this.client = graphql.defaults({
      headers: {
        authorization: `token ${token}`,
      },
    });
  }

  async getProfileBio() {
    const res = (await this.client(`
        {
          user(login: "${this.username}") {
            bio
          }
        }
    `)) as { user: { bio: string } };

    return res.user.bio;
  }

  async getPinnedProjects(): Promise<PinnedProject[]> {
    const res = (await this.client(`
    {
        user(login: "${this.username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                nameWithOwner
                url
                createdAt
                updatedAt
                stargazerCount
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    `)) as {
      user: {
        pinnedItems: {
          nodes: PinnedProject[];
        };
      };
    };
    return res.user.pinnedItems.nodes;
  }
}
