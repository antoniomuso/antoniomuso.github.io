import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  GITHUB_TOKEN: str(),
  GITHUB_USERNAME: str(),
});


export default env;
