"use server";
import envConfig from "@/src/config/envConfig";

const GetRecentPost = async () => {
  const fetchOption = {
    next: {
      tags: ["posts"],
    },
  };
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-title&limit=8`,
    fetchOption,
  );

  return res.json();
};

export default GetRecentPost;
