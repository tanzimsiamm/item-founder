"use server"
import envConfig from "@/src/config/envConfig";

const GetRecentPost =async () => {
  const res = await fetch(`${envConfig.baseApi}/items?sortBy=-title&limit=8`);

    return res.json();
}

export default GetRecentPost