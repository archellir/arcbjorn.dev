import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "edgedb";

export const client = createClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await client.query(`select BlogPost {
    id,
    title,
    content
  };`);
  res.status(200).json(posts);
}
