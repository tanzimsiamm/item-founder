"use server"
import envConfig from "@/src/config/envConfig";
// import { delay } from "@/src/utils/delay";

const GetRecentPost =async () => {
  const res = await fetch(`${envConfig.baseApi}/items?sortBy=-title&limit=8`);

  // await delay();

    return res.json();
}

export default GetRecentPost